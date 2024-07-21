import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function AppButton({ children, disabled, onPress, textStyle, style }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 15,
    width: "100%",
  },
  text: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppButton;
