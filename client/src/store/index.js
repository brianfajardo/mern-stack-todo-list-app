import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState)

export default configureStore