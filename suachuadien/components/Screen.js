import React from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ScreenTitle from "./ScreenTitle";

function Screen({ children, style, title }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScreenTitle>{title}</ScreenTitle>
        <ScrollView>
          <View style={[styles.screen, style]}>{children}</View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  screen: {
    // backgroundColor: "red",

    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

export default Screen;
