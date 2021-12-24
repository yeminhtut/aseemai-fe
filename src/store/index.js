import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { rootEpic } from '../middlewares/epics'
import commonReducer from './reducers/common'
import customerReducer from './reducers/customers'
import userReducer from './reducers/users'

const rootReducer = combineReducers({
    common: commonReducer,
    customer: customerReducer,
    user: userReducer
})

const logger = createLogger({
    level: 'info',
    duration: true,
    collapsed: true
})

const epicMiddleware = createEpicMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
)

epicMiddleware.run(rootEpic)

export default store
