import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function ScreenTitle({ children, containerStyle, textStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText style={[styles.title, textStyle]}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 7,
    textTransform: "uppercase",
    color: "#fff",
  },
  container: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "blue",
    paddingTop: StatusBar.currentHeight + 42,
  },
});
