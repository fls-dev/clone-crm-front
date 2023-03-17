import { defineStore } from 'pinia';

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
