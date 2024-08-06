import { Button } from "react-native";
import open from "./suachuadien/api/open";

import Screen from "./suachuadien/components/Screen";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const open = async () => {
    try {
      // const res = await axios({
      //   url: "http://192.168.68.110:8080/get",
      //   method: "get",
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwiZXhwIjoxNzIzNzk1ODQ1fQ.fyxiXvRdCTuNbn4SkV8NwGbZuX04tHpFOS-ccxHa2TEnnxo6Z8ZMn3mqpyL6EjB8m-mOU4Dvp5uQUzt0ggN01Q",
      //   },
      // });

      const res = await axios({
        url: "http://192.168.68.110:8080/login",
        method: "post",
        data: {
          username: "0123456789",
          password: "123",
        },
      });

      const data = await res.data;
      // const res = await fetch("http://192.168.68.110:8080/open");
      // const data = await res.json();
      console.log(data);
    } catch (e) {
      console.err(e);
    }
  };

  return (
    <>
      {/* <RegisterScreen></RegisterScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <LinkingIdScreen></LinkingIdScreen> */}
      {/* <Test></Test> */}
      {/* <PersonalInfosScreen></PersonalInfosScreen> */}
      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}
      <Screen>
        <Button title="open" onPress={open} />
      </Screen>
    </>
  );
}
