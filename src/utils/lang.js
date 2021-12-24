import i18n from '../i18n'
import storage from './storage'
import get from 'lodash/get'

export function getInitLanguage() {
    const lang = storage.getLanguage()
    if (lang) return lang
    return get(i18n, 'languages[0]') || 'en'
}
