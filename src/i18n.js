import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { LANGUAGES } from './constants/i18n'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(Backend)
    .use(LanguageDetector)
    .init({
        whitelist: LANGUAGES,
        preload: LANGUAGES,
        lowerCaseLng: true,
        fallbackLng: 'en', // remove when we upgrade react-i18next

        ns: ['translations'],
        defaultNS: 'translations',

        debug: false,

        detection: {
            order: ['localStorage', 'header', 'navigator'],
            lookupLocalStorage: 'languageCode'
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default',
            useSuspense: false
        }
    })

export default i18n
