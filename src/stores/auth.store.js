import {defineStore} from 'pinia';
import axios from "axios";
import {settings} from "@/setting";
import router from "@/router";
import Toaster from "@meforma/vue-toaster";
import {createToaster} from "@meforma/vue-toaster";

const toaster = createToaster();
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        role: null,
        accessToken: null
    }),
    getters: {
        getDataUser(state) {
            return JSON.parse(atob(state.user))
        },
    },
    actions: {
        // async refreshTokens() {
        //     try {
        //         const response = await axios.post(`${settings.serverUrl}/auth/refresh-tokens`, {},
        //             {withCredentials: true})
        //
        //
        //     } catch (error) {
        //         console.log(error)
        //         // $router.push({ name: 'login' }).catch(() => {})
        //         throw new ErrorWrapper(error)
        //     }
        // },
        async login(login, password) {
            try {
                await axios.post(`${settings.serverUrl}auth/login`, {login, password})
                    .then(res => {
                        if (res.request.status === 200) {
                            this.accessToken = res.data.accessToken;
                            this.user = res.data.user;
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
