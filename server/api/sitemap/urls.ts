import { useAPI } from '~/composables/useApi'
import type { SitemapUrlInput } from '@nuxtjs/sitemap'

export default defineSitemapEventHandler(async () => {
    const APIURL = useAPI();

    const posts = await $fetch<GetPosts>(APIURL + '/posts', {
        query: {
            page_size: 100,
        }
    })
    const pages = posts.posts.map(p => ({
        loc: `posts/${p.id}`,
        changefreq: 'daily',
        priority: 0.5,
    })) satisfies SitemapUrlInput[]
    return pages
})
