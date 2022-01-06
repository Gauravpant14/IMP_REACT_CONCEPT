import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../Reducers/rootReducer";
import userReducer from "../Reducers/userReducer";
import rootSaga from "../Sagas/rootSaga";
import userSaga from "../Sagas/userSaga";

// 1st step : create the saga middleware
const sagaMiddleware = createSagaMiddleware()


//2nd Step : mount saga on store
export const store = configureStore({
    reducer: rootReducer,
    middleware:[...getDefaultMiddleware(),sagaMiddleware]
})

//3rd Step: then run the saga

sagaMiddleware.run(rootSaga)