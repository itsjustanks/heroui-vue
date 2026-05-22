<script setup lang="ts">
import { computed, ref } from 'vue'
import ReactMount from './react-mount'
import VueSafe from './vue-safe'
import CodeBlock from './CodeBlock.vue'
import { categories, demos, type Demo } from './registry'

type Mode = 'both' | 'vue' | 'react'

const selectedId = ref(demos[0]?.id ?? '')
const mode = ref<Mode>('both')
const current = computed<Demo | undefined>(
  () => demos.find((d) => d.id === selectedId.value) ?? demos[0]
)

function demosIn (category: string): Demo[] {
  return demos.filter((d) => d.category === category)
}
</script>

<template>
  <div class="pg">
    <header class="pg-header">
      <h1>heroui-vue</h1>
      <span class="pg-sub">parity playground — the Vue port vs. HeroUI v3 React</span>
      <span class="pg-spacer" />
      <span class="pg-count">{{ demos.length }} components</span>
      <a href="https://www.npmjs.com/package/@itsjustanks/heroui-vue" target="_blank" rel="noopener">npm</a>
      <a href="https://github.com/itsjustanks/heroui-vue" target="_blank" rel="noopener">GitHub</a>
    </header>

    <div class="pg-body">
      <nav class="pg-sidebar">
        <template v-for="cat in categories" :key="cat">
          <div class="pg-group-label">{{ cat }}</div>
          <button
            v-for="d in demosIn(cat)"
            :key="d.id"
            :class="{ 'is-active': d.id === selectedId }"
            @click="selectedId = d.id"
          >
            {{ d.title }}
          </button>
        </template>
      </nav>

      <main v-if="current" class="pg-main">
        <div class="pg-main-head">
          <h2>{{ current.title }}</h2>
          <span class="pg-cat-tag">{{ current.category }}</span>
          <span class="pg-spacer" />
          <div class="pg-toggle">
            <button :class="{ 'is-active': mode === 'both' }" @click="mode = 'both'">Both</button>
            <button :class="{ 'is-active': mode === 'vue' }" @click="mode = 'vue'">Vue</button>
            <button :class="{ 'is-active': mode === 'react' }" @click="mode = 'react'">React</button>
          </div>
        </div>

        <div class="pg-section-title">Preview</div>
        <div class="pg-panes" :class="{ 'is-single': mode !== 'both' }">
          <section v-if="mode !== 'react'" class="pg-pane pg-pane--vue">
            <div class="pg-pane-label"><span class="dot" />Vue · @itsjustanks/heroui-vue</div>
            <div class="pg-pane-body">
              <VueSafe :key="'vue-' + current.id">
                <component :is="current.vue" />
              </VueSafe>
            </div>
          </section>
          <section v-if="mode !== 'vue'" class="pg-pane pg-pane--react">
            <div class="pg-pane-label"><span class="dot" />React · @heroui/react</div>
            <div class="pg-pane-body">
              <ReactMount :component="current.react" :key="'react-' + current.id" />
            </div>
          </section>
        </div>
        <p v-if="current.note" class="pg-note">{{ current.note }}</p>

        <div class="pg-section-title">Code</div>
        <div class="pg-panes" :class="{ 'is-single': mode !== 'both' }">
          <CodeBlock
            v-if="mode !== 'react'"
            variant="vue"
            :label="current.id + '.vue'"
            :source="current.vueSource"
          />
          <CodeBlock
            v-if="mode !== 'vue'"
            variant="react"
            :label="current.id + '.tsx'"
            :source="current.reactSource"
          />
        </div>
      </main>
    </div>
  </div>
</template>
