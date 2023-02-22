import { defineStore } from 'pinia';
import i18n from "@/locales/i18n";


const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        appLanguage: localStorage.getItem("appLanguage") || 'en'
    }),
    getters:{
        getAppLanguage: (state) => state.appLanguage
    },
    actions: {
        setAppLanguage(state, language) {
            state.appLanguage = language;
            localStorage.setItem("appLanguage", language);
        }
        // async getAll() {
        //     this.users = { loading: true };
        //     fetchWrapper.get(baseUrl)
        //         .then(users => this.users = users)
        //         .catch(error => this.users = { error })
        // }
    }
});
