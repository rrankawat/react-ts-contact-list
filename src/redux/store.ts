import { combineReducers, createStore, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import allContactReducer from './contacts/reducers/allContactReducer'

const reducers = combineReducers({
  allContact: allContactReducer,
})

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

type ReduxState = ReturnType<typeof reducers>
type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>

export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector
