import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5O8w52ysB7p3UvBTrIluhVFytSgzpJ5k",
  authDomain: "instagram-6877e.firebaseapp.com",
  projectId: "instagram-6877e",
  storageBucket: "instagram-6877e.appspot.com",
  messagingSenderId: "318592731909",
  appId: "1:318592731909:web:70a642e616b5199340856c",
};

// if (firebase.apps.length === 0) {
initializeApp(firebaseConfig);
// }

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Landing"}>
        <Stack.Screen
          name={"Landing"}
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Register"}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
