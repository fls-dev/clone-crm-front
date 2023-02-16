import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import LayoutAdmin from "@/views/UserLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/UserLayout.vue')
        },
        {
            path: '/user',
            component: LayoutAdmin,
            redirect: { name: 'dashboard' },
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/components/user/pages/Manager.vue'),
                    meta: {
                        titlePage:"Manager usług",
                        iconPage:"fa-puzzle-piece",
                        requiresAuth: true
                    },
                },
                {
                    path: 'consult',
                    name: 'consult',
                    component: () => import('@/components/user/pages/Consultations.vue'),
                    meta: {
                        titlePage:"KONSULTACJE",
                        iconPage:"fa-comments-question-check",
                        requiresAuth: true
                    },
                },
                {
                    path: 'invoices',
                    name: 'invoices',
                    component: () => import('@/components/user/pages/Invoices.vue'),
                    meta: {
                        titlePage:"Fakturowanie online",
                        iconPage:"fa-file-invoice",
                        requiresAuth: true
                    },
                },
            ]
        }
    ]
})

export default router
