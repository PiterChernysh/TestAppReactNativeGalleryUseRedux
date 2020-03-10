import { API_KEY } from "react-native-dotenv";

export const GETPhotoById = props => async dispatch => {
  const { photoId, setPhoto } = props;
  function onSuccess(success) {
    setPhoto(success);
    return success;
  }
  function onError(error) {
    return error;
  }
  try {
    const URL = `https://api.unsplash.com/photos/${photoId}?client_id=${API_KEY}&language=en-US`;
    const res = await fetch(URL, {
      method: "GET"
    });
    const success = await res.json();
    dispatch({
      type: "SET_PHOTO",
      payload: success
    });
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};
