import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

/**
 * Create store using configStore - RTK
 * Create slice using createSlice - RTK
 * Export actions and reducer from slice
 * Configure slice and store
 * Configure store and app using Provider - from react-redux
 * Dispatch action from component, import action from slice, useDispatch from react-redux and pass action which will be used as action.payload
 * To subscribe to any part of store, useSelector is used which take function as an arguement. And return which need to be subscribed
 */
