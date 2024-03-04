import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/Todo'
export const store = configureStore({
    reducer: todoReducer
    
});