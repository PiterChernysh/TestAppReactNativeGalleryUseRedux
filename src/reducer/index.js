import { combineReducers } from "redux";

import photosList from "./photoList";
import photoId from "./photoId";
import photo from "./photo";

const reducer = combineReducers({
  photosList: photosList,
  photoId: photoId,
  photo: photo
});

export default reducer;
