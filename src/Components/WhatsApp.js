import { SWhatsApp } from 'vue-socials'

  export default {
    name: 'SWhatsAppSharing',
    
    components: { SWhatsApp },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          number: '+57 3166252214',
          text: 'Hello world!',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };