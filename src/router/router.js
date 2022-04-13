import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/pokemon',
        name: 'home',
        component: () => import(/*webpackChunkName: "PokemonLayout" */'@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: '/',
                redirect: '/pokemon'
            },
            {
                path: '',
                name: 'home',
                component: () => import(/*webpackChunkName: "ListPage" */'@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/*webpackChunkName: "AboutPage" */'@/modules/pokemon/pages/AboutPage')
            },
            {
                path: ':id',
                name: 'item-id',
                component: () => import(/*webpackChunkName: "ItemPage" */'@/modules/pokemon/pages/ItemPage'),
                props:(route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? {id: 1} : {id};
                },
            },
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/*webpackChunkName: "DBZLayout" */'@/modules/dbz/layouts/DragonBallLayout'),
        children:[
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "DBZCharactersPage" */'@/modules/dbz/pages/CharactersPage')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "DBZAboutPage" */'@/modules/dbz/pages/AboutPage')
            },
            {
                path: '',
                redirect: '{ name: "dbz-characters" }'
            }

        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/*webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router