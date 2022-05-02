import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

// if (process.env.NODE_ENV === "development") {
//   if (typeof window !== "undefined") middlewares.push(logger);
// }

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(sagaMiddleware);

// if (window.process.env.NODE_ENV === "development") {
// 	if (typeof window !== "undefined") middlewares.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
