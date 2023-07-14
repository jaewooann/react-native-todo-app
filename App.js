import { StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import app from "./firebase";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Main"
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
