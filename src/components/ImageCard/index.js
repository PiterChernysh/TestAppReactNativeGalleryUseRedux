import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { W } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginLeft: (W - (W / 2.4) * 2) / 3,
    marginTop: (W - (W / 2.4) * 2) / 3,
    width: W / 2.4,
    height: W * 0.63,
    backgroundColor: "blue",
    borderRadius: 10
  },
  sub: {
    shadowColor: "#000",
    width: W / 2.4,
    height: W * 0.63,
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 2
  },
  h1: {
    position: "absolute",
    top: W / 2.35,
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 10,
    textAlign: "left"
  },
  h2: {
    position: "absolute",
    top: W / 1.75,
    paddingLeft: 10,
    fontSize: 10,
    textAlign: "left"
  },
  cover: {
    position: "relative",
    width: W / 2.4,
    height: W * 0.63,
    borderRadius: 10
  },
  coverAbout: {
    position: "absolute",
    top: W / 2.3,
    width: W / 2.4,
    height: W * 0.26,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
    opacity: 0.8
  }
});

const ImageCard = props => {
  const { container, sub, coverAbout, h1, h2, cover } = styles;
  const { navigation, image } = props;
  const { id } = image;
  const dispatch = new useDispatch();
  const setNovigationProps = () => {
    dispatch({ type: "SET_PHOTOID", payload: id });
    navigation.navigate("FullPhoto");
  };
  const img = image.urls.small;
  const userName = image.user.username;
  const alt_description = image.alt_description;
  return (
    <TouchableOpacity onPress={setNovigationProps}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
          <Image style={coverAbout} source={require("./card.png")} />
          <Text style={h1}>{alt_description}</Text>
          <Text style={h2}>User: {userName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
