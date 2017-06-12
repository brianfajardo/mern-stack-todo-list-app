import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState)

export default configureStore