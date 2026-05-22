<script setup lang="ts">
import { computed, shallowRef, ref, watch } from 'vue'
import ReactMount from './react-mount'
import VueSafe from './vue-safe'
import CodeBlock from './CodeBlock.vue'
import DiffView from './DiffView.vue'
import { categories, componentGroups, demos, loadDemo, portedDemos, type ComponentGroup, type Demo, type DemoMeta } from './registry'
import { parityOf, paritySummary, PARITY_LABEL } from './parity'

type Mode = 'both' | 'vue' | 'react'

const params = new URLSearchParams(location.search)
const selectedComponentId = ref(params.get('c') ?? portedDemos[0]?.componentId ?? componentGroups[0]?.id ?? '')
const selectedExampleSlug = ref(params.get('e') ?? portedDemos.find((demo) => demo.componentId === selectedComponentId.value)?.slug ?? '')
const mode = ref<Mode>('both')
const current = shallowRef<Demo>()
const isLoading = ref(false)
const loadError = ref('')

const selectedExampleId = computed(() => {
  const match = demos.find((demo) =>
    demo.componentId === selectedComponentId.value && demo.slug === selectedExampleSlug.value
  )
  return match?.id ?? portedDemos.find((demo) => demo.componentId === selectedComponentId.value)?.id ?? portedDemos[0]?.id ?? ''
})

// Keep the URL in sync so any component example is directly linkable.
watch([selectedComponentId, selectedExampleSlug], ([componentId, slug]) => {
  const url = new URL(location.href)
  url.searchParams.set('c', componentId)
  if (slug) url.searchParams.set('e', slug)
  else url.searchParams.delete('e')
  history.replaceState(null, '', url)
})
const currentMeta = computed(
  () => demos.find((d) => d.id === selectedExampleId.value) ?? portedDemos[0]
)

// Live parity dashboard data.
const summary = computed(() => paritySummary(componentGroups.map((group) => group.id)))
const currentParity = computed(() => parityOf(selectedComponentId.value))
const portedCount = computed(() => portedDemos.length)
const totalCount = computed(() => demos.length)

function groupsIn (category: string): ComponentGroup[] {
  return componentGroups.filter((group) => group.category === category)
}

function selectExample (demo: DemoMeta): void {
  if (!demo.ported) return
  selectedComponentId.value = demo.componentId
  selectedExampleSlug.value = demo.slug
}

watch(selectedExampleId, async (id) => {
  const loadId = id
  isLoading.value = true
  loadError.value = ''

  try {
    const demo = await loadDemo(loadId)
    if (selectedExampleId.value === loadId) current.value = demo
  } catch (error) {
    if (selectedExampleId.value === loadId) {
      loadError.value = error instanceof Error ? error.message : String(error)
      current.value = undefined
    }
  } finally {
    if (selectedExampleId.value === loadId) isLoading.value = false
  }
}, { immediate: true })
</script>

<template>
  <div class="pg">
    <header class="pg-header">
      <h1>heroui-vue</h1>
      <span class="pg-sub">parity playground — the Vue port vs. HeroUI v3 React</span>
      <span class="pg-spacer" />
      <div class="pg-parity-summary" title="Visual parity against HeroUI v3 React">
        <span class="pg-pchip is-match">{{ summary.match }} match</span>
        <span class="pg-pchip is-minor">{{ summary.minor }} minor</span>
        <span class="pg-pchip is-broken">{{ summary.broken }} broken</span>
        <span class="pg-pchip is-crash">{{ summary.crash }} crash</span>
      </div>
      <span class="pg-count">{{ portedCount }} / {{ totalCount }} examples</span>
      <a href="https://www.npmjs.com/package/@itsjustanks/heroui-vue" target="_blank" rel="noopener">npm</a>
      <a href="https://github.com/itsjustanks/heroui-vue" target="_blank" rel="noopener">GitHub</a>
    </header>

    <div class="pg-body">
      <nav class="pg-sidebar">
        <template v-for="cat in categories" :key="cat">
          <div class="pg-group-label">{{ cat }}</div>
          <div
            v-for="group in groupsIn(cat)"
            :key="group.id"
            class="pg-nav-component"
          >
            <div class="pg-nav-component-head">
              <span
                class="pg-nav-dot"
                :class="'is-' + parityOf(group.id).status"
                :title="PARITY_LABEL[parityOf(group.id).status]"
              />
              <span class="pg-nav-text">{{ group.title }}</span>
              <span class="pg-nav-count">{{ group.portedCount }}/{{ group.exampleCount }}</span>
            </div>
            <button
              v-for="d in group.examples"
              :key="d.id"
              class="pg-nav-example"
              :class="{ 'is-active': d.id === selectedExampleId, 'is-missing': !d.ported }"
              :disabled="!d.ported"
              @click="selectExample(d)"
            >
              <span class="pg-nav-text">{{ d.title }}</span>
            </button>
          </div>
        </template>
      </nav>

      <main v-if="currentMeta" class="pg-main">
        <div class="pg-main-head">
          <h2>{{ current?.componentTitle ?? currentMeta.componentTitle }}</h2>
          <span class="pg-cat-tag">{{ current?.title ?? currentMeta.title }}</span>
          <span class="pg-cat-tag">{{ current?.category ?? currentMeta.category }}</span>
          <span class="pg-pchip" :class="'is-' + currentParity.status">
            {{ PARITY_LABEL[currentParity.status] }}
          </span>
          <span class="pg-spacer" />
          <div class="pg-toggle">
            <button :class="{ 'is-active': mode === 'both' }" @click="mode = 'both'">Both</button>
            <button :class="{ 'is-active': mode === 'vue' }" @click="mode = 'vue'">Vue</button>
            <button :class="{ 'is-active': mode === 'react' }" @click="mode = 'react'">React</button>
          </div>
        </div>

        <div
          v-if="currentParity.note"
          class="pg-parity-banner"
          :class="'is-' + currentParity.status"
        >
          <strong>{{ PARITY_LABEL[currentParity.status] }}:</strong>
          {{ currentParity.note }}
        </div>

        <div class="pg-section-title">Preview</div>
        <div v-if="isLoading" class="pg-loading">Loading {{ currentMeta.componentTitle }} / {{ currentMeta.title }} preview…</div>
        <div v-else-if="loadError" class="pg-loading is-error">{{ loadError }}</div>
        <div v-else-if="current" class="pg-panes" :class="{ 'is-single': mode !== 'both' }">
          <section v-if="mode !== 'react'" class="pg-pane pg-pane--vue">
            <div class="pg-pane-label"><span class="dot" />Vue · @itsjustanks/heroui-vue</div>
            <div class="pg-pane-body">
              <div class="vue-host">
                <VueSafe :key="'vue-' + current.id">
                  <component :is="current.vue" />
                </VueSafe>
              </div>
            </div>
          </section>
          <section v-if="mode !== 'vue'" class="pg-pane pg-pane--react">
            <div class="pg-pane-label"><span class="dot" />React · @heroui/react</div>
            <div class="pg-pane-body">
              <ReactMount :component="current.react" :key="'react-' + current.id" />
            </div>
          </section>
        </div>
        <p v-if="current?.note" class="pg-note">{{ current.note }}</p>

        <div class="pg-section-title">Code · Vue ↔ React diff</div>
        <DiffView
          v-if="current && mode === 'both'"
          :vue-source="current.vueSource"
          :react-source="current.reactSource"
        />
        <div v-else-if="current" class="pg-panes is-single">
          <CodeBlock
            v-if="mode === 'vue'"
            variant="vue"
            :label="'demos/vue/' + current.componentId + '/' + current.slug + '.tsx'"
            :source="current.vueSource"
          />
          <CodeBlock
            v-if="mode === 'react'"
            variant="react"
            :label="'demos/react/' + current.componentId + '/' + current.slug + '.tsx'"
            :source="current.reactSource"
          />
        </div>
      </main>
    </div>
  </div>
</template>
