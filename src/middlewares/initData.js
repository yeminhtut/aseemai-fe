//import { populateInitData } from '../store/actions/common'
import actionTypes from '../store/actionTypes'
import storage from '../utils/storage'
import { getInitLanguage } from '../utils/lang'

const initData = store => next => action => {
    // if (action.type === actionTypes.RETRIEVE_INIT_DATA) {
    //     const data = {
    //         userId: storage.getUser(),
    //         language: getInitLanguage()
    //     }

    //     store.dispatch(populateInitData(data))
    // }

    return next(action)
}

export default initData
