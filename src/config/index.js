import isObject from 'lodash/isObject'
import mapValues from 'lodash/mapValues'

// NOTE: Use string if dev and production use same value
const settings = {
    networkTimeout: 30000,
    apiHost: {
        development: 'https://bjs61qeyc1.execute-api.us-east-1.amazonaws.com/dev/',
        production: 'https://bjs61qeyc1.execute-api.us-east-1.amazonaws.com/dev/'
        // development: 'http://localhost:3000',
        // production: 'http://localhost:3000'
    },
}

const config = mapValues(settings, item => {
    if (!isObject(item)) return item
    if (!item.development || !item.production) return item
    const env = process.env.BUILD_ENV
    return env && item[env] ? item[env] : item['development']
})

export default config
