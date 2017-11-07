import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import { Field, reduxForm } from "redux-form";

import MyTextInput from "../../components/input/";

const required = value => (value ? undefined : "Required");

const Form = props => {
  return (
    <ScrollView>
      <View>
        <Text>First Name</Text>
        <Field name="firstName" component={MyTextInput} validate={[required]} />
        <Text>Last Name</Text>
        <Field name="lastName" component={MyTextInput} />
        <Text>Email</Text>
        <Field name="email" component={MyTextInput} />

        <TouchableOpacity onPress={props.handleSubmit}>
          <Text>Submit!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default reduxForm({
  form: "register"
})(Form);
