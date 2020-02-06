import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TextReducer from "./text/TextReducer";
import LogoReducer from "./logo/LogoReducer";
import tabsReducer from "./tabs/TabsReducer";

const reducers = () => {
    return combineReducers({
        text: TextReducer,
        logo: LogoReducer,
        tabs: tabsReducer
    });
}

const middleware = () => {
    return applyMiddleware(thunk)
}

export const store = () => {
    return createStore(reducers(), middleware());
}

export default store;