import React, { useState } from "react";
import { Modal, View, Button, StatusBar } from "react-native";

import AppButton from "./AppButton";

// const items = [day, month, year];

function DatePicker(props) {
  const [modalVisible, setModelVisible] = useState(false);

  return (
    <React.Fragment>
      <AppButton onPress={() => setModelVisible(true)}>dd/mm/yyyy</AppButton>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ paddingTop: StatusBar.currentHeight + 45 }}>
          <Button title="Đóng" onPress={() => setModelVisible(false)} />
        </View>
      </Modal>
    </React.Fragment>
  );
}

export default DatePicker;
