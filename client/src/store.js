import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '.././src/Components/reducers/isLoading'


export const store = configureStore({
  reducer: {
      loading: loadingReducer,
  },
})