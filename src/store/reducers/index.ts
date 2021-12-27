import { combineReducers } from "redux";
import { CategoryState } from "../../types/category";
import { UserState } from "../../types/user";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export interface AppState {
    user: UserState;
    categories: CategoryState;
    // records: any;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    categories: categoryReducer
    //  records: ()=>{}
});

export default rootReducer;