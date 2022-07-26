import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "../reducer";
import rootSaga from "../saga/index";

export const history = createBrowserHistory();

const sagaMiddleWare: any = createSagaMiddleware();

export const configStore = () => {
    const store = createStore(
        createRootReducer(history),
        applyMiddleware(sagaMiddleWare)
    );
    sagaMiddleWare.run(rootSaga);
    return store;
};
