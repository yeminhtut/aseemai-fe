import qs from 'qs'

export function parseQueryString(location) {
    if (!location) return {}
    let search = location.search
    if (search.indexOf('?') !== 0) return {}
    search = search.slice(1)
    return qs.parse(search, { arrayFormat: 'repeat' })
}
