import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <View>
      <TextInput placeholder={"name"} onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder={"email"}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder={"password"}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title={"SignUp"} onPress={onSignUp} />
    </View>
  );
};

export default Register;
