import React from "react";
import { StackNavigator } from "react-navigation";
import Register from "../register";

const navigationOptions = {
  header: null,
  gesturesEnabled: false
};

const routeConfig = {
  Register: {
    screen: Register,
    navigationOptions
  }
};

export default RootNavigator = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions
  }
});
