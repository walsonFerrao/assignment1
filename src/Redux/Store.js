
import { createStore,combineReducers ,applyMiddleware } from 'redux'
import { Productreducer } from './Product/reducer'
import { Loginreducer } from './Login/reducer'
import thunk from 'redux-thunk'



export const rootreducer=combineReducers({
product:Productreducer,
login:Loginreducer
})


export const store=createStore(rootreducer,applyMiddleware(thunk))


