import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TabsReducer from "./tabs/TabsReducer";
import ColorsReducer from "./colors/ColorsReducer";
import TextReducer from "./text/TextReducer";
import LogoReducer from "./logo/LogoReducer";
import CutReducer from "./cut/CutReducer";

const reducers = () => {
    return combineReducers({
        tabs: TabsReducer,
        colors: ColorsReducer,
        text: TextReducer,
        logo: LogoReducer,
        cut: CutReducer
    });
}

const middleware = () => {
    return applyMiddleware(thunk)
}

export const store = () => {
    return createStore(reducers(), middleware());
}

export default store;