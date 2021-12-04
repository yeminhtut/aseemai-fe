import isNumber from 'lodash/isNumber'

export const trans = (t, key, language, ...values) => {
    if (!t) {
        return key
    }
    const raw = t(key, { postProcess: false })
    if (!language) {
        return raw
    }
    if (values.length === 1 && isNumber(values[0])) {
        if (values[0] === 1 && language === 'en') {
            // plural is only on en
            const pluralKey = `${key}_plural`
            const translated = t(pluralKey, values[0])
            if (translated === values[0]) {
                return raw
            }
            return translated
        } else {
            return raw
        }
    }
}
