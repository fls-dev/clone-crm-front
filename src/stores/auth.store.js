import {defineStore} from 'pinia';
import axios from "axios";
import {settings} from "@/setting";
import router from "@/router";
import {createToaster} from "@meforma/vue-toaster";

const toaster = createToaster();
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        userId: null,
        user: null,
        role: null,
        accessToken: null
    }),
    getters: {
        getDataUser(state) {
            console.log(JSON.parse(atob(state.user)))
            return JSON.parse(atob(state.user))
        },
    },
    actions: {
        async refreshTokens() {
            try {
                const response = await axios.post(`${settings.serverUrl}/auth/refresh`, {},
                    {withCredentials: true})
                console.log(response)
            } catch (error) {
                console.log("error:"+error)
                // $router.push({ name: 'login' }).catch(() => {})
            }
        },
        async login(login, password) {
            try {
                await axios.post(`${settings.serverUrl}/auth/login`, {login, password})
                    .then(res => {
                        if (res.request.status === 200) {
                            this.accessToken = res.data.accessToken;
                            this.user = res.data.user;
                            this.userId = JSON.parse(atob(res.data.user)).id;
                            this.role = JSON.parse(atob(res.data.user)).group;
                            if(JSON.parse(atob(res.data.user)).group === "USER"){
                                router.push('/user');
                            }else{
                                router.push('/admin');
                            }
                        }
                        if (res.request.status === 401) {
                            toaster.error(res.response.data.message, {
                                type: "error",
                                position: "top",
                                duration: 3000
                            });

                        }
                    }).catch(function (error) {
                        toaster.error(error.response.data.message,{
                            position: "top",
                            duration: 3000
                        });
                    })


                // router.push(this.returnUrl || '/');
            } catch (error) {
                toaster.error(`Error`, {
                    type: "error",
                    position: "top",
                    duration: 3000
                });
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }

    },
    persist: {
        enabled: true,
    },
});
