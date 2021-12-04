import map from 'lodash/map'
import uniqBy from 'lodash/uniqBy'
import get from 'lodash/get'

export const mapDistrictsOptions = states => {
    const options = map(states, item => ({
        label: item.state,
        value: item.state
    }))
    return uniqBy(options, 'label')
}

export const mapCityOptions = states => {
    const options = map(states, item => ({
        label: item.city,
        value: item.city
    }))
    return uniqBy(options, 'label')
}


export const isManager = user => {
    return get(user.outlet, 'role') == 'L' ? true : false 
}

export const currencyFormat = num => {
    return num ? num.toLocaleString(undefined, {minimumFractionDigits: 2}) : ''
}