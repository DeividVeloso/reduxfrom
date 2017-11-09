import React from "react";
import { View, Text, Button } from "react-native";
import composePresentation from "../utils/composePresentation";

const Presentation = props => {
  console.log(props);
  return (
    <View>
      <Text>{props.title}</Text>
      {props.isVisible ? <Text>I'm visible</Text> : <Text> Not Visible </Text>}
      <Text>{props.message}</Text>
      <Button title="Click me!" onPress={props.toggleVisibility} />
    </View>
  );
};

export default composePresentation()(Presentation);
