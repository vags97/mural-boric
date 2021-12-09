import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import minifyTheme from "minify-css-string";
import es from 'vuetify/lib/locale/es'

export default ({
                    Vue,      // the version of Vue being used in the VuePress app
                    options,  // the options for the root Vue instance
                    router,   // the router instance for the app
                    siteData,  // site metadata
                }) => {
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({
        lang: {
            locales: {es},
            current: 'es'
        },
        icons: {
            iconfont: 'mdiSvg',
        },
        theme: {
            options: {
                minifyTheme,
                customProperties: true
            },
            themes: {
                light: {
                    primary: '#08546d;',
                    secondary: '#dbf87b'
                }
            }
        }
    })
}
