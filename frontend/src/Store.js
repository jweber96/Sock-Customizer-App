import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TextReducer from "./text/TextReducer";
import LogoReducer from "./logo/LogoReducer";
import tabsReducer from "./tabs/TabsReducer";

const reducers = () => {
    return combineReducers({
        textState: TextReducer,
        logoState: LogoReducer,
        tabsState: tabsReducer
    });
}

const middleware = () => {
    return applyMiddleware(thunk)
}

export const store = () => {
    return createStore(reducers(), middleware());
}

export default store;