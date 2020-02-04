import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TextReducer from "./reducers/TextReducer";
import LogoReducer from "./reducers/LogoReducer";
import tabReducer from "./reducers/TabReducer";

const reducers = () => {
    return combineReducers({
        textState: TextReducer,
        logoState: LogoReducer,
        tabState: tabReducer
    });
}

const middleware = () => {
    return applyMiddleware(thunk)
}

export const store = () => {
    return createStore(reducers(), middleware());
}

export default store;