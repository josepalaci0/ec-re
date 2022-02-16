import {combineReducers} from "redux";
import {ProductsReducer,selectedProductReducer,CartListProductsReducer } from './ProductsReducer';


 export const RootReducer = combineReducers({
    ProductList: ProductsReducer,
    ProductDetail: selectedProductReducer,
    CartListProducts: CartListProductsReducer,
});
export default RootReducer;