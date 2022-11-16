/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Blueprints
import { md3 } from 'vuetify/blueprints'

// Vuetify
import { createVuetify } from 'vuetify'

// Components
import { VBtn } from 'vuetify/components'

export default createVuetify({
  aliases: {
    VBtnAlt: VBtn,
  },
  blueprint: md3,
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'primary',
      // height: 44,
      // minWidth: 120,
    },
    VBtnAlt: {
      color: 'primary',
      height: 48,
      minWidth: 120,
      variant: 'outlined',
    },
    VSheet: {
      color: '#212121',
    },
  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
          bgLottie: '#F5BB5A',
        },
      },
    },
  },
})
