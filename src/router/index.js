import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/auth/Login.vue";
import LayoutAdmin from "@/views/UserLayout.vue";



import {useAuthStore} from "@/stores";
import {messages} from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";
import Signup from "@/views/auth/Signup.vue";


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
            path: '/403',
            name: "403",
            component: () => import('@/views/403error.vue'),
            meta: {
                requiresAuth: false,
                title: "403"
            },
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
            path: '/signup',
            name: 'signup',
            component: Signup,
            meta: {
                requiresAuth: false,
                title: "signup"
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
                        title: "dashboard",
                        roles:["USER","ADMIN"]
                    },
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('@/components/user/pages/User-profile.vue'),
                    meta: {
                        iconPage:"fa-light fa-id-card-clip",
                        title: "profile",
                        requiresAuth: true,
                        roles:["USER","ADMIN"]
                    },
                },
                {
                    path: 'consultation',
                    name: 'consultation',
                    component: () => import('@/components/user/pages/Consultation.vue'),
                    meta: {
                        iconPage:"fa-comments-question-check",
                        title: "consultation",
                        requiresAuth: true,
                        roles:["USER","ADMIN"]
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
    ],
    scrollBehavior(to, from, savedPosition) {
        const layoutId = document.querySelector('.content');
        if (layoutId) {
            layoutId.scrollTop = 0;
        }
    }
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const user = authStore.user;
    console.log("to.name   :" +to.name)
    console.log("useAuthStore().role   :" +useAuthStore().role)

    document.title = messages[useInfoStore().getAppLanguage].title_page[to.meta.title]
    if (to.meta.requiresAuth && user ==null) {
        // next();
        next('/login');
        console.log("login :   ")
    }
    else if (to.meta.roles) {
        if (!to.meta.roles.includes(authStore.role)){
            next('/403');
        }else {
            next();
        }
    }else if(to.name === "login" && user !==null && useAuthStore().role === "USER"){
        router.push('/user');
    }
    else {
        next();
    }
})

export default router
