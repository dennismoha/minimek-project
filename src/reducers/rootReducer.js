import {combineReducers} from "redux";

import testReducer from "features/tabs/tabsReducer"

const rootReducer = combineReducers({
    tabs : testReducer,
});

export default rootReducer;