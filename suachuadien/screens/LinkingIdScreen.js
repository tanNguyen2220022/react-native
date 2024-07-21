import { React, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import { Formik } from "formik";
import * as Yup from "yup";
import Checkbox from "expo-checkbox";

const validationSchema = Yup.object().shape({
  //   cellphone: Yup.string()
  //     .required("Cần nhập Số điện thoại")
  //     .min(10, "Số điện thoại tối thiểu 10 ký tự")
  //     .max(15, "Số điện thoại tối đa 15 ký tự"),
  //   fullname: Yup.string()
  //     .required("Cần nhập Họ và tên")
  //     .max(255, "Họ và tên tối đa 255 ký tự"),
  //   password: Yup.string()
  //     .required("Cần nhập Mật khẩu")
  //     .matches(
  //       /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{8,255}$/,
  //       "Mật khẩu KHÔNG DẤU, tối thiểu 8 ký tự, gồm chữ thường, chữ hoa, chữ số"
  //     ),
  id: Yup.string()
    .required("Cần nhập mã khách hàng")
    .length(11, "Sai mã khách hàng"),
});

function LinkingIdScreen(props) {
  return (
    <Screen title={"LIÊN KẾT MÃ"}>
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldValue }) => (
          <View style={styles.form}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{ color: "red", fontSize: 25 }}
                  children={"PE"}
                />
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  //   onChangeText={(text) => {
                  //     setFieldValue("id", "PE" + text);
                  //   }}
                  onChangeText={handleChange("id")}
                  placeholder="Mã khách hàng"
                  style={styles.textInput}
                  // secureTextEntry={true}
                  textContentType="none"
                />
              </View>
              <AppText style={{ color: "red" }} children={errors.id} />
            </View>

            <AppText>
              Mã khách hàng có{" "}
              <AppText
                style={{ color: "red", textDecorationLine: "underline" }}
              >
                13 ký tự
              </AppText>
              , bắt đầu với 2 ký tự{" "}
              <AppText
                style={{ color: "red", textDecorationLine: "underline" }}
              >
                PE
              </AppText>
            </AppText>

            {/* KIỂM TRA */}
            <AppButton
              children={"KIỂM TRA"}
              onPress={handleSubmit}
              style={{ width: "60%" }}
            />
          </View>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: {
    //     backgroundColor: "gold",

    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 300,
    justifyContent: "space-between",
    paddingTop: 50,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    fontSize: 25,
    marginVertical: 1,
    padding: 5,
    width: "100%",
  },
});

export default LinkingIdScreen;
