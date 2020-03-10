import React from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { W, H } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: W,
    height: H,
    backgroundColor: "black",
    display: "flex"
  },
  backdropImage: {
    position: "relative",
    width: W,
    flex: 1
  }
});

const PhotoFull = props => {
  const { photo, navigation } = props;
  const { container, backdropImage } = styles;
  const img = !!photo.urls ? photo.urls.full : null;
  const setNovigationProps = () => {
    navigation.navigate("Home");
  };
  return (
    <TouchableOpacity onPress={setNovigationProps}>
      <View style={container}>
        <Image style={backdropImage} source={{ uri: img }} />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = store => ({
  photo: store.photo
});
export default connect(mapStateToProps)(PhotoFull);
