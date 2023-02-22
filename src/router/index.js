import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import LayoutAdmin from "@/views/UserLayout.vue";
import i18n from "@/locales/i18n";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
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
                        iconPage:"fa-puzzle-piece",
                        requiresAuth: true
                    },
                },
                {
                    path: 'consultation',
                    name: 'consultation',
                    component: () => import('@/components/user/pages/Consultation.vue'),
                    meta: {
                        iconPage:"fa-comments-question-check",
                        requiresAuth: true
                    },
                },
                {
                    path: 'company-no-client',
                    name: 'company-no-client',
                    component: () => import('@/components/user/pages/MyCompanyNoClient.vue'),
                    meta: {
                        iconPage:"fa-address-card",
                        requiresAuth: true
                    },
                },
                {
                    path: 'invoices',
                    name: 'invoices',
                    component: () => import('@/components/user/pages/Invoices.vue'),
                    meta: {
                        iconPage:"fa-file-invoice",
                        requiresAuth: true
                    },
                },
            ]
        }
    ]
})
// router.beforeEach((to) => {
//     // ✅ This will work make sure the correct store is used for the
//     // current running app
//     const main = useMainStore(pinia)
//
//     if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
// })
export default router
