import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../src/screen/Home";
import FullPhoto from "../src/screen/FullPhoto";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "GALLERY"
      }
    },
    FullPhoto: {
      screen: FullPhoto,
      navigationOptions: {
        headerTitle: "Full Photo",
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigate extends React.Component {
  render() {
    return <AppContainer />;
  }
}
