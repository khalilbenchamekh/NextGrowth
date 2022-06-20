import {createStore,applyMiddleware,compose} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../Saga";
import userReducer from "../Reducers/userReducer";

const sagaMiddleware=createSagaMiddleware();

const store=compose( applyMiddleware(sagaMiddleware))(createStore)(userReducer)

sagaMiddleware.run(rootSaga)

export default store;