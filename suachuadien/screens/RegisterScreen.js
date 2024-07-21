import { React, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import { Formik } from "formik";
import * as Yup from "yup";
import Checkbox from "expo-checkbox";

const validationSchema = Yup.object().shape({
  cellphone: Yup.string()
    .required("Cần nhập Số điện thoại")
    .min(10, "Số điện thoại tối thiểu 10 ký tự")
    .max(15, "Số điện thoại tối đa 15 ký tự"),
  fullname: Yup.string()
    .required("Cần nhập Họ và tên")
    .max(255, "Họ và tên tối đa 255 ký tự"),
  password: Yup.string()
    .required("Cần nhập Mật khẩu")
    .matches(
      /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{8,255}$/,
      "Mật khẩu KHÔNG DẤU, tối thiểu 8 ký tự, gồm chữ thường, chữ hoa, chữ số"
    ),
});

function RegisterScreen(props) {
  const [choice, setChoice] = useState(true);

  return (
    <Screen title={"ĐĂNG KÝ"}>
      <Formik
        initialValues={{
          cellphone: "",
          fullname: "",
          isTermAgreed: choice,
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldValue }) => (
          <View style={styles.form}>
            {/* Họ và tên */}
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={handleChange("fullname")}
              placeholder="Họ và tên"
              style={[styles.textInput]}
              textContentType="name"
            />
            <AppText style={{ color: "red" }} children={errors.fullname} />

            {/* Số điện thoại */}
            <TextInput
              keyboardType="phone-pad"
              onChangeText={handleChange("cellphone")}
              placeholder="Số điện thoại"
              style={styles.textInput}
              textContentType="telephoneNumber"
            />
            <AppText style={{ color: "red" }} children={errors.cellphone} />

            {/* Mật khẩu */}
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="visible-password"
              onChangeText={handleChange("password")}
              placeholder="Mật khẩu"
              style={styles.textInput}
              secureTextEntry={true}
              textContentType="password"
            />
            <AppText style={{ color: "red" }} children={errors.password} />

            {/* Term */}
            <View style={styles.termContainer}>
              <Checkbox
                style={{ width: 40, height: 40, marginRight: 5 }}
                onValueChange={() => {
                  setChoice(!choice);
                  setFieldValue("isTermAgreed", !choice);
                  console.log(!choice);
                }}
                value={choice}
              />
              <AppText>
                Bằng việc đăng ký, bạn đã đọc và đồng ý với{" "}
                <AppText
                  onPress={() => console.log("Điều khoản sử dụng")}
                  style={styles.termText}
                >
                  Điều khoản sử dụng
                </AppText>{" "}
                và{" "}
                <AppText
                  onPress={() => console.log("Chính sách bảo mật")}
                  style={styles.termText}
                >
                  Chính sách bảo mật
                </AppText>{" "}
                của EVNSPC
              </AppText>
            </View>

            {/* ĐĂNG KÝ */}
            <AppButton
              children={"ĐĂNG KÝ"}
              disabled={!choice}
              onPress={handleSubmit}
              style={{ width: "60%" }}
            />
          </View>
        )}
      </Formik>

      {/* Đã có tài khoản? */}
      <View style={styles.hadAccountContainer}>
        <AppText children={"Đã có tài khoản?"} style={{ marginRight: 10 }} />
        <Button title="Đăng nhập" />
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
  hadAccountContainer: {
    // backgroundColor: "red",

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  termContainer: {
    // backgroundColor: "red",

    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 12,
    paddingTop: 7,
    width: "100%",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    fontSize: 25,
    marginVertical: 1,
    padding: 5,
    width: "100%",
  },
  termText: {
    color: "dodgerblue",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
