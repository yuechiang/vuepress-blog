import { reveal, revealMarkdown } from "/root/vuepress-blog/node_modules/vuepress-plugin-md-enhance/lib/client/reveal";

export const useReveal = () => [reveal(), revealMarkdown()
];