import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: { },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

//sagaMiddleware.run()
