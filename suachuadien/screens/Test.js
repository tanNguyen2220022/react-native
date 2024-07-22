import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Switch,
  Text,
  View,
  Button,
  Platform,
} from "react-native";

import AppText from "../components/AppText";
import NoScrollScreen from "../components/NoScrollScreen";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DatePicker from "../components/DatePicker";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/logo-spsc.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/logo-spsc.png"),
  },
];

function Test(props) {
  const [isNew, setIsNew] = useState(false);

  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <NoScrollScreen style={{}} title={"Test"}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "gold" }}>
            <Image source={item.image} />
            <AppText>item.id</AppText>
          </View>
        )}
      />
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      />
      <DatePicker />
    </NoScrollScreen>
  );
}

const styles = StyleSheet.create({});

export default Test;
