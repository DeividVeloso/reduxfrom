import React from "react";
import { StackNavigator } from "react-navigation";
import Register from "../register";
import Hocs from "../hocs";

const navigationOptions = {
  header: null,
  gesturesEnabled: false
};

export default (RootNavigator = StackNavigator({
  Hocs: {
    screen: Hocs,
    navigationOptions
  },
  Register: {
    screen: Register,
    navigationOptions
  }
}));
