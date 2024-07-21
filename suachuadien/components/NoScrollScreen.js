import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ScreenTitle from "./ScreenTitle";

function NoScrollScreen({ children, style, title }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScreenTitle>{title}</ScreenTitle>
        <View style={[styles.screen, style]}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gold",

    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  screen: {
    // backgroundColor: "red",

    alignItems: "center",
    // flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
});

export default NoScrollScreen;
