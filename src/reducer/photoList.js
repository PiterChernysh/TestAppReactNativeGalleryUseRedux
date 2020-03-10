const reducer = (photosList = [], { type, payload }) => {
  switch (type) {
    case "SET_PHOTOSLIST": {
      return payload;
    }
    default: {
      return photosList;
    }
  }
};
export default reducer;