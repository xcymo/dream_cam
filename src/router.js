import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Support from './views/Support'
import More from './views/More'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/support',
            name: 'support',
            component: Support,
            meta: {
                hasBack: true
            }
        },
        {
            path: '/more',
            name: 'more',
            component: More,
            meta: {
                hasBack: true
            }
        },
    ]
})
