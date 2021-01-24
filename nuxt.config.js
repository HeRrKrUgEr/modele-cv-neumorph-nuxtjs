export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vincent Chanliau | Développeur Full-Stack',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/, /w-1*/, /slick*/, /vue-map*/],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios'],
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '~/assets/pro-light-svg-icons',
            icons: [
              'faPhoneRotary',
              'faEnvelope',
              'faBriefCase',
              'faHome',
              'faAsterisk',
              'faGlobe',
              'faGolfBall',
              'faGolfClub',
              'faPiano',
              'faCalendar',
              'faGraduationCap',
              'faCog',
              'faFilePdf',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebookF', 'faInstagram'],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
    extractCSS: true,
  },
}
