export function currentExample (fallback = 'basic'): string {
  return new URLSearchParams(globalThis.location?.search ?? '').get('e') ?? fallback
}

export const avatarUrls = {
  blue: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',
  green: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg',
  orange: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg',
  purple: 'https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
}

export const faqItems = [
  {
    title: 'How do I place an order?',
    content: 'Browse our products, add items to your cart, and proceed to checkout.'
  },
  {
    title: 'Can I modify or cancel my order?',
    content: 'Yes, you can modify or cancel your order before it is shipped.'
  },
  {
    title: 'What payment methods do you accept?',
    content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.'
  }
]
