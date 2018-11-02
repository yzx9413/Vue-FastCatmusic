import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import remmend from '@/components/remmend'
import person from '@/components/person'
import search from '@/components/search'
import rank from '@/components/rank'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/remmend',
        name: 'remmend',
        component: remmend
    }, {
        path: '/person',
        name: 'person',
        component: person
    }, {
        path: '/rank',
        name: 'rank',
        component: rank
    }, {
        path: '/search',
        name: 'search',
        component: search
    }]
})