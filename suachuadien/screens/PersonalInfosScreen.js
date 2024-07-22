import { React, useState } from "react";
import { Image, View, Text, StyleSheet, Switch } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Checkbox from "expo-checkbox";

import Screen from "../components/Screen";
import { Formik } from "formik";
import AppButton from "../components/AppButton";

function PersonalInfosScreen(props) {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  return (
    <Screen title="THÔNG TIN CÁ NHÂN">
      <View style={{ paddingTop: 15, alignItems: "center", width: "100%" }}>
        <View
          style={{
            //     backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "center",
            //     width: "100%",
          }}
        >
          <Image
            style={{ height: 90, width: 90 }}
            source={require("../assets/profile.jpg")}
          />
          <Switch style={{ left: 150, position: "absolute" }}></Switch>
        </View>
        <Formik
          initialValues={{
            sex: "",
            fullname: "",
            cellphone: "",
            dob: "",
            email: "",
            address: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, errors, setFieldValue }) => (
            <View style={styles.form}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 50,
                  }}
                >
                  <Checkbox
                    onValueChange={(value) => {
                      setFieldValue("sex", "male");
                      setMale(true);
                      setFemale(false);
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 5,
                    }}
                    value={male}
                  ></Checkbox>
                  <Text>Nam</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    onValueChange={(value) => {
                      setFieldValue("sex", "female");
                      setMale(false);
                      setFemale(true);
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 5,
                    }}
                    value={female}
                  ></Checkbox>
                  <Text>Nữ</Text>
                </View>
              </View>

              <AppButton onPress={handleSubmit}>CẬP NHẬT</AppButton>
            </View>
          )}
        </Formik>

        {/* <View style={{ marginTop: 10 }}>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            selected={sex}
            onSelected={(value) => {
              setSex(value);
              console.log(value);
            }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="male"
              label="Nam"
              style={{ height: 30, width: 30 }}
            />
            <View style={{ paddingVertical: 7 }}></View>
            <RadioButtonItem
              value="female"
              label="Nữ"
              style={{ height: 30, width: 30 }}
            />
          </RadioButtonGroup>
        </View> */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
});

export default PersonalInfosScreen;
