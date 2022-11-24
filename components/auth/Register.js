import React, { useState } from "react";
import { TextInput, View } from "react-native";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput placeholder={name} onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder={password}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
  );
};

export default Register;
