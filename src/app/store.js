import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import chatReducer from '../features/user/chatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    // 2.10 
  },
});
