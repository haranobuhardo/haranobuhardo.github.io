import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/logo@512.png',
    bio: 'A simple person living in a complicated world. Sharing about Engineering, Tech, and Life',
    name: 'Hardo',
    status: '✍🏻',
  },
  description: 'Forked from SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'haranobuhardo.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Personal Blog',
  themeColor: '#3D4451',
  title: 'Hardo\'s Blog',
}
