const reducer = (photoId = {}, { type, payload }) => {
  switch (type) {
    case "SET_PHOTOID": {
      return payload;
    }
    default: {
      return photoId;
    }
  }
};
export default reducer;
