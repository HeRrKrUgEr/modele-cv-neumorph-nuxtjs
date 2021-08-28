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
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: '~/components/LoadingBar.vue',

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/, /w-1*/, /slick*/, /vue-map*/],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    'nuxt-gsap-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-206135414-1',
      },
    ],
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
              'faBirthdayCake',
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
              'faInfo',
              'faCloudDownload',
              'faComputer',
              'faLaptop',
              'faLaptopSlash',
              'faLaptopCode',
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
