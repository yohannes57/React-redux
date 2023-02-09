import { combineReducers } from "redux";
import breadReducer from "./breads/breadReducer";
import cakeReducer from "./cakes/cakeReducer";
import iceReducer from "./iceCream/IceReducer";
import userReducer from "./users/userReducer";
import youtubeReducer from "./youtubeVideos/youtubeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
  bread: breadReducer,
  user: userReducer,
  videos: youtubeReducer,
});

export default rootReducer;
