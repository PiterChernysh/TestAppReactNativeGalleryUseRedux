import { API_KEY } from "react-native-dotenv";

export const GETPhotosList = props => async dispatch => {
  function onSuccess(success) {
    dispatch({
      type: "SET_PHOTOSLIST",
      payload: success
    });
    return success;
  }
  function onError(error) {
    return error;
  }
  try {
    const URL = `https://api.unsplash.com/photos?page=1&client_id=${API_KEY}`;
    const res = await fetch(URL, {
      method: "GET"
    });
    const success = await res.json();
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};
