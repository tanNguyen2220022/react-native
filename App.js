import { StatusBar } from "expo-status-bar";

import RegisterScreen from "./suachuadien/screens/RegisterScreen";
import WelcomeScreen from "./suachuadien/screens/WelcomeScreen";
import LoginScreen from "./suachuadien/screens/LoginScreen";
import LinkingIdScreen from "./suachuadien/screens/LinkingIdScreen";
import Test from "./suachuadien/screens/Test";
import PersonalInfosScreen from "./suachuadien/screens/PersonalInfosScreen";
import Screen from "./suachuadien/components/Screen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Tweet Details"
      onPress={() => navigation.navigate("Tweet Details", { id: 123 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen title="Tweets">
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen title="Tweet Details">
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "white",
      // headerShown: false,
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="Tweet Details"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen title={"Account"}>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
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
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
