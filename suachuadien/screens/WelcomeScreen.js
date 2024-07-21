import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import NoScrollScreen from "../components/NoScrollScreen";

function WelcomeScreen(props) {
  return (
    <NoScrollScreen style={styles.screen} title={"SỬA CHỮA ĐIỆN"}>
      <AppText style={styles.greetLine}>Xin chào bạn!</AppText>

      <View style={styles.buttonsContainer}>
        <AppButton style={{ width: "95%" }}>ĐĂNG NHẬP</AppButton>
        <AppButton style={{ backgroundColor: "dodgerblue", width: "95%" }}>
          ĐĂNG KÝ
        </AppButton>
      </View>
    </NoScrollScreen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    //     backgroundColor: "red",

    width: "100%",
    paddingTop: 80,
    height: 230,
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetLine: {
    fontSize: 30,
  },
  screen: {
    //     backgroundColor: "red",

    justifyContent: "flex-start",
    paddingTop: 150,
  },
});

export default WelcomeScreen;
