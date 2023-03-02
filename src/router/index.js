import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import LayoutAdmin from "@/views/UserLayout.vue";



import {useAuthStore} from "@/stores";
import {messages} from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'start',
            redirect: { name: 'login' },
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/NotFound.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false,
                title: "login"
            },
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
                        requiresAuth: true,
                        title: "dashboard"
                    },
                },
                {
                    path: 'consultation',
                    name: 'consultation',
                    component: () => import('@/components/user/pages/Consultation.vue'),
                    meta: {
                        iconPage:"fa-comments-question-check",
                        title: "consultation",
                        requiresAuth: true
                    },
                },
                {
                    path: 'company-no-client',
                    name: 'company-no-client',
                    component: () => import('@/components/user/pages/MyCompanyNoClient.vue'),
                    meta: {
                        iconPage:"fa-address-card",
                        title: "company",
                        requiresAuth: true
                    },
                },
                {
                    path: 'company-client',
                    name: 'company-client',
                    component: () => import('@/components/user/pages/MyCompanyClient.vue'),
                    meta: {
                        iconPage:"fa-address-card",
                        title: "company",
                        requiresAuth: true
                    },
                },
                {
                    path: 'invoices',
                    name: 'invoices',
                    component: () => import('@/components/user/pages/Invoices.vue'),
                    meta: {
                        iconPage:"fa-file-invoice",
                        title: "invoices",
                        requiresAuth: true
                    },
                },
            ]
        }
    ]
})

router.beforeEach((to) => {
    const auth = useAuthStore();
    document.title = messages[useInfoStore().getAppLanguage].title_page[to.meta.title]
    // if (to.meta.requiresAuth && to.name !== "Login") return '/login';
})

export default router
