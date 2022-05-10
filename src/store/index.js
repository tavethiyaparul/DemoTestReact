import { savaDataReducers, getDataReducers, getDataIdReducers } from "./reducer/empReducer"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from "redux"
const rootReducer = combineReducers({
    saveData: savaDataReducers,
    getDatas: getDataReducers,
    getDataId: getDataIdReducers,
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
