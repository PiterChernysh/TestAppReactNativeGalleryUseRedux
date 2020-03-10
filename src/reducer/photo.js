const reducer = (photo = {}, { type, payload }) => {
  switch (type) {
    case "SET_PHOTO": {
      return payload;
    }
    default: {
      return photo;
    }
  }
};
export default reducer;
