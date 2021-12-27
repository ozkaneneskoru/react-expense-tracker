import { CategoryDispatch, CategoryModel, CategoryForm} from "../../types/category";
import api from "../../utils/api";


export const getCategories = () => async (dispatch: CategoryDispatch) => {
    dispatch({ type: "GET_CATEGORIES_START" });
    try {
        const response = await api.get<CategoryModel[]>("/categories");
        dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
    }
    catch (error) {
        dispatch({ type: "GET_CATEGORIES_ERROR" });
    }
}

export const addCategory = (form: CategoryForm) => async(dispatch: CategoryDispatch) =>{
    dispatch({ type: "ADD_CATEGORY_START"});
    try{
        const response = await api.post<CategoryModel>("/categories",form);
        dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: response.data});
    }
    catch{
        dispatch({ type: "ADD_CATEGORY_ERROR" });
    }
}