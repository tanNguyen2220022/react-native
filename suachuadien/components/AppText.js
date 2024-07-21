import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";

function AppText({ children, containerStyle, onPress, style }) {
  return (
    <Text onPress={onPress} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppText;
