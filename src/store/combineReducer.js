import { combineReducers } from "redux";
import messageSlice from "./slices/messageSlice";
import userSlice from "./slices/userSlice";


const rootReducer = combineReducers({
  user: userSlice,
  messages: messageSlice,
});

export default rootReducer;