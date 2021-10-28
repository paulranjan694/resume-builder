import { applyMiddleware, createStore } from "redux";
import { logger } from 'redux-logger';
import rootReducer from "./rootReducer";

const middleWare =[];

if(process.env.NODE_ENV==='development'){
    middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));