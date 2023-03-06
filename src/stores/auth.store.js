import { defineStore } from 'pinia';
import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isLoggedIn: null,
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        // async refreshTokens () {
        //     try {
        //         const response = await axios.post(`${}/auth/refresh-tokens`, {},
        //             { withCredentials: true })
        //
        //         _setAuthData({
        //             accessToken: response.data.data.accessToken,
        //             exp: _parseTokenData(response.data.data.accessToken).exp
        //         })
        //         return new ResponseWrapper(response, response.data.data)
        //     } catch (error) {
        //         console.log(error.response.data.code)
        //         _resetAuthData()
        //         $router.push({ name: 'login' }).catch(() => {})
        //         throw new ErrorWrapper(error)
        //     }
        // }

    //     async login(username, password) {
    //         const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
    //
    //         // update pinia state
    //         this.user = user;
    //
    //         // store user details and jwt in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //
    //         // redirect to previous url or default to home page
    //         router.push(this.returnUrl || '/');
    //     },
    //     logout() {
    //         this.user = null;
    //         localStorage.removeItem('user');
    //         router.push('/login');
    //     }

    }
});
