import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB5O8w52ysB7p3UvBTrIluhVFytSgzpJ5k",
  authDomain: "instagram-6877e.firebaseapp.com",
  projectId: "instagram-6877e",
  storageBucket: "instagram-6877e.appspot.com",
  messagingSenderId: "318592731909",
  appId: "1:318592731909:web:70a642e616b5199340856c",
};

initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setLoaded(true);
      setLoggedIn(!!user);
    });
  }, []);
  console.log("loggedIn", loggedIn);
  if (!loaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  if (!loggedIn)
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi user</Text>
    </View>
  );
};

export default App;
