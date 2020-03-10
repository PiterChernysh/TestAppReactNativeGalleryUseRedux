import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ImageCard from "../../components/ImageCard";
import { GETPhotosList } from "../../actions/GETPhotosList";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const Home = props => {
  const { GETPhotosList, photosList, navigation } = props;
  useEffect(() => {
    GETPhotosList();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {photosList.map(item => (
          <ImageCard key={item.id} image={item} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = store => ({
  photosList: store.photosList
});
export default connect(mapStateToProps, { GETPhotosList })(Home);
