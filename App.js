import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./src/store/reducers";
import RootNavigator from "./src/scenes/main-navigator/";

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <RootNavigator />
      </Provider>
    );
  }
}
