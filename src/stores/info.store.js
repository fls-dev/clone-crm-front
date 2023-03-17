import {defineStore} from 'pinia';
import {messages} from "@/locales/i18n";
export const useInfoStore = defineStore({
    id: 'info',
    state: () => ({
        appLanguage: 'en',
        activeColor: "b-white"
    }),
    getters: {
        getAppLanguage: (state) => state.appLanguage,
        getActiveColor: (state) => state.activeColor
    },
    actions: {
        setAppLanguage(language, route = "default") {
            document.title=messages[language].title_page[route]
            this.appLanguage = language;
        },
        setActiveColor(color) {
            let newColor = "b-white";
            if(color === "b-white"){
                newColor = "b-black"
            }
            this.activeColor = newColor;
        }
        // async getAll() {
        //     this.users = { loading: true };
        //     fetchWrapper.get(baseUrl)
        //         .then(users => this.users = users)
        //         .catch(error => this.users = { error })
        // }
    },
    persist: true
});
