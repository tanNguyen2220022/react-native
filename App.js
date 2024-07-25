import { StatusBar } from "expo-status-bar";

import RegisterScreen from "./suachuadien/screens/RegisterScreen";
import WelcomeScreen from "./suachuadien/screens/WelcomeScreen";
import LoginScreen from "./suachuadien/screens/LoginScreen";
import LinkingIdScreen from "./suachuadien/screens/LinkingIdScreen";
import Test from "./suachuadien/screens/Test";
import PersonalInfosScreen from "./suachuadien/screens/PersonalInfosScreen";
import Screen from "./suachuadien/components/Screen";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen title="Navigation Test">
    <Text>Tweets</Text>
    <Link />
  </Screen>
);
const TweetDetails = () => (
  <Screen title="Navigation Test">
    <Text>TweetDetails</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <>
      {/* <RegisterScreen></RegisterScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <LinkingIdScreen></LinkingIdScreen> */}
      {/* <Test></Test> */}
      {/* <PersonalInfosScreen></PersonalInfosScreen> */}
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar style="inverted" />
    </>
  );
}
