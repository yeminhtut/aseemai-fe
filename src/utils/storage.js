const tokenName = 'USER_TOKEN'
const userIdName = 'USER_ID'
const languageCodeName = 'languageCode'

const isLocalStorageAvailable = () => {
    try {
        window.localStorage.setItem('test', 'test')
        window.localStorage.removeItem('test')
        return true
    } catch (e) {
        return false
    }
}

const storage = {
    isAuthenticated: () => storage.get(tokenName) !== null,

    clear: () => {
        storage.removeToken()
    },

    getLanguage: () => {
        return storage.get(languageCodeName)
    },

    setLanguage: value => {
        return storage.set(languageCodeName, value)
    },

    getToken: () => {
        return storage.get(tokenName)
    },

    setToken: value => {
        return storage.set(tokenName, value)
    },

    removeToken: () => {
        return storage.remove(tokenName)
    },

    getUser: () => {
        return storage.get(userIdName)
    },

    setUser: value => {
        return storage.set(userIdName, value)
    },

    get: key => {
        if (isLocalStorageAvailable()) {
            return window.localStorage.getItem(key)
        }

        const regex = new RegExp("(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$")
        if (typeof document !== 'undefined') {
            const cookie = document.cookie.replace(regex, '$1')
            if (cookie) {
                return cookie
            }
        }
        return null
    },

    set: (key, value) => {
        if (isLocalStorageAvailable()) {
            window.localStorage.setItem(key, value)
            return
        }
        const date = new Date()
        date.setTime(date.getTime() + 86400000)
        if (typeof document !== 'undefined') {
            document.cookie = `${key}=${value};expires=${date.toGMTString()}`
        }
        return
    },

    remove: key => {
        if (isLocalStorageAvailable()) {
            window.localStorage.removeItem(key)
            return
        }
        const expiry = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        if (typeof document !== 'undefined') {
            document.cookie = `${key}${expiry}`
        }
        return
    }
}

export default storage
