import axios from 'axios'
import storage from './storage'

import isObject from 'lodash/isObject'
import mapValues from 'lodash/mapValues'

// NOTE: Use string if dev and production use same value
const settings = {
    networkTimeout: 30000,
    apiHost: {
        // development: 'https://d9zwqcqfk5.execute-api.us-east-1.amazonaws.com/dev/',
        // production: 'https://d9zwqcqfk5.execute-api.us-east-1.amazonaws.com/dev/',
        // development: 'https://yg0hhsxdz8.execute-api.ap-southeast-1.amazonaws.com/dev/',
        // production: 'https://yg0hhsxdz8.execute-api.ap-southeast-1.amazonaws.com/dev/',
        development: 'http://localhost:3000',
        production: 'http://localhost:3000'
    },
}

const config = mapValues(settings, item => {
    if (!isObject(item)) return item
    if (!item.development || !item.production) return item
    const env = process.env.BUILD_ENV
    return env && item[env] ? item[env] : item['development']
})

const defaultRequestConfig = {
    baseURL: config.apiHost,
    timeout: config.networkTimeout,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const agent = axios.create({ ...defaultRequestConfig })

const appendHeader = axiosConfig => {
    const token = storage.getToken()
    axiosConfig.headers['Authorization'] = token ? `Bearer ${token}` : ''
    return axiosConfig
}

const errorHandler = error => {
    return Promise.reject(error)
}

agent.interceptors.request.use(appendHeader, errorHandler)

const get = (uri, options = {}) => agent.get(uri, options)

const post = (uri, data = {}, config = {}) => agent.post(uri, data, config)

const put = (uri, data = {}, config = {}) => agent.put(uri, data, config)

const patch = (uri, data = {}) => agent.patch(uri, data)

const del = (uri, data = {}) => agent.delete(uri, data)

export { del, get, patch, post, put }
