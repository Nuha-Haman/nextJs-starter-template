import { combineReducers } from "redux";
import ThemeReducer from "@/redux/features/themeControllers/ThemeSlice";

const RootReducer = combineReducers({
  theme: ThemeReducer,
  // Add your reducers here
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
