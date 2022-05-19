import { defineClientConfig } from "@vuepress/client";
import Badge from "/root/vuepress-blog/node_modules/@mr-hope/vuepress-plugin-components/lib/client/components/Badge";
import BackToTop from "/root/vuepress-blog/node_modules/@mr-hope/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    
  },
  rootComponents: [
    BackToTop,
    
  ],
});