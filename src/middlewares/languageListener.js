import storage from '../utils/storage'
import i18n from '../i18n'
import * as actionTypes from '../store/actionTypes'

const languageListener = () => next => action => {
    return next(action)
    // if (action.type !== actionTypes.CHANGE_LANGUAGE) {
    //     return next(action)
    // }
    // const lang = action.language
    // storage.setLanguage(lang)
    // i18n.changeLanguage(lang)
    // return next(action)
}

export default languageListener
