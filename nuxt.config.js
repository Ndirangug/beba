import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - beba',
    title: 'beba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/event-bus.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyBZgURdVR_BOFf7j-bk4bzVTCEAXdApUlE',
      },
    ],
    [
      'nuxt-google-maps-module',
      {
        key: 'AIzaSyBZgURdVR_BOFf7j-bk4bzVTCEAXdApUlE',
      },
    ],
    //
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    icons: {
      iconfont: 'mdiSvg',
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2F006F',
          accent: '#7198BA',
          secondary: '#2C4EC5',
          info: colors.teal.lighten1,
          warning: colors.red.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          lightText: '#DAC6C2',
          darkText: '#141119',
        },
      },
    },
  },
  // https://firebase.nuxtjs.org/guide/getting-started
  firebase: {
    config: {
      apiKey: 'AIzaSyCpesW78ka0z5Vi30whnWFjkuOoQKuFKYE',
      authDomain: 'fleet-management-sys.firebaseapp.com',
      projectId: 'fleet-management-sys',
      storageBucket: 'fleet-management-sys.appspot.com',
      messagingSenderId: '841578396667',
      appId: '1:841578396667:web:f2d431edabc4da84f7695e',
      measurementId: 'G-D48YF6T0D5',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
