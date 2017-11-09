import React from "react";
import { ScrollView, View, Text } from "react-native";
import Presentation from "../hocs/components/presentation";

const Hocs = props => {
  return (
    <ScrollView>
      <View>
        <Text>Hello World!</Text>
        <Presentation />
      </View>
    </ScrollView>
  );
};

export default Hocs;
