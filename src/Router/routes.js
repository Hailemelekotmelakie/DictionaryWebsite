import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/commentLists.vue')
    },
    {
        path: '/addads',
        name: 'addads',
        component: () => import('@/components/adsAdd.vue')
    },
    {
        path: '/Viewads',
        name: 'Viewads',
        component: () => import('@/components/ViewAds.vue')
    }
]
const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default Router;