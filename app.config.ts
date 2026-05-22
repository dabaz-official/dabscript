export default defineAppConfig({
  seo: {
    titleTemplate: '%s - DabScript',
    title: 'DabScript',
    description: 'A no-nonsense, essential JavaScript guide for beginners, focusing on core concepts and clear, actionable syntax.'
  },
  header: {
    title: 'DabScript',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    }
  },
  github: {
    url: 'https://github.com/dabaz-official/dabscript',
    branch: 'main',
    rootDir: 'content',
  },
})
