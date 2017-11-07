import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  error: {
    color: "red"
  },
  warning: {
    color: "blue"
  }
});
export default (MyTextInput = props => {
  const { input, meta: { touched, error, warning }, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {touched &&
        ((error && <Text style={styles.error}>{error}</Text>) ||
          (warning && <Text style={styles.warning}>{warning}</Text>))}
    </View>
  );
});
