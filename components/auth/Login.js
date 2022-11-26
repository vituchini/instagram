import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignUp = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <View>
      <TextInput
        placeholder={"email"}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder={"password"}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title={"SignIp"} onPress={onSignUp} />
    </View>
  );
};

export default Login;
