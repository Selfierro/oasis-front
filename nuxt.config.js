import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=cyrillic'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [{ src: '@/assets/global.sass', lang: 'sass' }],

    styleResources: {
        // your settings here
        sass: [
            './assets/abstracts/_flex.sass',
            './assets/abstracts/_gridSettings.sass',
            './assets/abstracts/_imageSettings.sass',
            './assets/abstracts/_transition.sass',
            './assets/abstracts/_borderRadius.sass',
            './assets/abstracts/_btnSettings.sass',
            './assets/abstracts/_padding.sass',
            './assets/abstracts/_margin.sass',
            './assets/abstracts/_shadow.sass',
            './assets/vars/_colors.sass',
            './assets/vars/_button.sass',
            './assets/vars/_form.sass'
        ]
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '~/plugins/api.js',
            ssr: true
        },
        {
            src: '~/plugins/helpers.js',
            ssr: false
        },
        {
            src: '~/plugins/vue-validate.js',
            ssr: true
        }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'nuxt-seo'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
