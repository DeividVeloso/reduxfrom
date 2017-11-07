import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./src/store/reducers";
import RootNavigator from "./src/scenes/main-navigator/";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools)

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
