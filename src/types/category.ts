import { ThunkDispatch } from "redux-thunk";

export interface CategoryModel{
    id: number;
    name: string;
    type: string;
    color: string;
}
export interface CategoryForm{
    name: string;
    type: "income" | "expense";
    color?: string;
  }

export interface CategoryState{
    data: CategoryModel[];
    loading: boolean;
    error: string;
}

interface GET_START {
    type: "GET_CATEGORIES_START";
}
interface GET_SUCCESS {
    type: "GET_CATEGORIES_SUCCESS";
    payload: CategoryModel[];
}
interface GET_ERROR {
    type: "GET_CATEGORIES_ERROR";
}
interface ADD_START {
    type: "ADD_CATEGORY_START";
}
interface ADD_SUCCESS {
    type: "ADD_CATEGORY_SUCCESS";
    payload: CategoryModel;
}
interface ADD_ERROR {
    type: "ADD_CATEGORY_ERROR";
}
export type CategoryAction= GET_ERROR | GET_START | GET_SUCCESS | ADD_ERROR | ADD_START | ADD_SUCCESS;
export type CategoryDispatch= ThunkDispatch<CategoryState, void, CategoryAction>;
