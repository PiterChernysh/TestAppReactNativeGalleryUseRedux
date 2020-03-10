import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { GETPhotoById } from "../../actions/GETPhotoById";

import ComponentFullPhoto from "../../components/FullPhoto";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

const FullPhoto = props => {
  const { GETPhotoById, navigation } = props;
  useEffect(() => {
    GETPhotoById(props);
  }, []);
  return (
    <ComponentFullPhoto styles={styles.container} navigation={navigation} />
  );
};

const mapStateToProps = store => ({
  photoId: store.photoId
});
export default connect(mapStateToProps, { GETPhotoById })(FullPhoto);
