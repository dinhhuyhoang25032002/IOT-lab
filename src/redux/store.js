import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counterSlice'
import userReduce from '../redux/slices/UserInforSlice'



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReduce,
    },
})