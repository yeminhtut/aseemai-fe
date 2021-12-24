import { combineEpics } from 'redux-observable'
import keysIn from 'lodash/keysIn'
import map from 'lodash/map'
import * as apiEpics from './apiEpics'

const combineEpicFunctions = epics =>
    epics.reduce((arr, epic) => {
        const keys = keysIn(epic)
        return arr.concat(map(keys, key => epic[key]))
    }, [])

const epics = combineEpicFunctions([apiEpics])

export const rootEpic = combineEpics(...epics)
