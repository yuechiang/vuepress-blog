import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/root/vuepress-blog/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "/root/vuepress-blog/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});