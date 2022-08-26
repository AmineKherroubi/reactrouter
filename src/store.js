import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  './stores/counter'
import userReducer from './stores/user'

export default configureStore({
  reducer: {
    counterReducer,
    userReducer
  },
})