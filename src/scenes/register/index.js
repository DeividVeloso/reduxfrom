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

import Form from "../../components/form/";

const Register = props => {
  const submit = values => {
    // print the form values to the console
    console.log(values);
  };

  return (
    <ScrollView>
      <View>
        <Form onSubmit={submit} />
      </View>
    </ScrollView>
  );
};

export default Register;
