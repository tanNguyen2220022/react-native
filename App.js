import { StatusBar } from "expo-status-bar";

import RegisterScreen from "./suachuadien/screens/RegisterScreen";
import WelcomeScreen from "./suachuadien/screens/WelcomeScreen";
import LoginScreen from "./suachuadien/screens/LoginScreen";
import LinkingIdScreen from "./suachuadien/screens/LinkingIdScreen";
import Test from "./suachuadien/screens/Test";
import PersonalInfosScreen from "./suachuadien/screens/PersonalInfosScreen";

export default function App() {
  return (
    <>
      {/* <RegisterScreen></RegisterScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <LinkingIdScreen></LinkingIdScreen> */}
      {/* <Test></Test> */}
      <PersonalInfosScreen></PersonalInfosScreen>
      <StatusBar style="inverted" />
    </>
  );
}
