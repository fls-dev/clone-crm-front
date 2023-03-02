import { createI18n } from 'vue-i18n';
import pl from "@/locales/pl.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";


export default createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    messages: { pl, en, ru },
})
export const messages = { pl, en, ru }
// const i18n = createI18n({
//     legacy: false,
//     sync: false,
//     globalInjection: true,
//     locale: "en",
//     fallbackLocale: "en",
//     formatFallbackMessages: true,
//     availableLocales: ["en", "pl", "ru"],
//     messages: { pl, en, ru },
//
// });
// export default i18n
