import { configureStore } from '@reduxjs/toolkit'
import languageSlice  from './slice'
export const store = configureStore({
reducer:{languageSlice}
})