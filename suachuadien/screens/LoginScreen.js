import { React, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import { Formik } from "formik";
import * as Yup from "yup";
import Checkbox from "expo-checkbox";

// const validationSchema = Yup.object().shape({
//   cellphone: Yup.string()
//     .required("Cần nhập Số điện thoại")
//     .min(10, "Số điện thoại tối thiểu 10 ký tự")
//     .max(15, "Số điện thoại tối đa 15 ký tự"),
//   password: Yup.string()
//     .required("Cần nhập Mật khẩu")
//     .matches(
//       /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{8,255}$/,
//       "Mật khẩu KHÔNG DẤU, tối thiểu 8 ký tự, gồm chữ thường, chữ hoa, chữ số"
//     ),
// });

function LoginScreen(props) {
  const [choice, setChoice] = useState(true);

  return (
    <Screen title={"ĐĂNG NHẬP"}>
      <Formik
        initialValues={{
          cellphone: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        // validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldValue }) => (
          <View style={styles.form}>
            <View style={styles.credentials}>
              {/* Số điện thoại */}
              <TextInput
                keyboardType="phone-pad"
                onChangeText={handleChange("cellphone")}
                placeholder="Số điện thoại"
                style={styles.textInput}
                textContentType="telephoneNumber"
              />
              {/* <AppText style={{ color: "red" }} children={errors.cellphone} /> */}

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
              {/* <AppText style={{ color: "red" }} children={errors.password} /> */}
            </View>

            <View style={{ paddingBottom: 20 }}>
              <Button title="Quên mật khẩu?" />
            </View>

            {/* ĐĂNG KÝ */}
            <AppButton
              children={"ĐĂNG NHẬP"}
              //       disabled={!choice}
              onPress={handleSubmit}
              style={{ width: "60%" }}
            />
          </View>
        )}
      </Formik>

      {/* Đã có tài khoản? */}
      <View style={styles.hadAccountContainer}>
        <AppText children={"Chưa có tài khoản?"} style={{ marginRight: 10 }} />
        <Button title="Đăng ký" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  credentials: {
    //     backgroundColor: "gold",

    height: 140,
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  form: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 30,
    width: "100%",
  },
  hadAccountContainer: {
    // backgroundColor: "red",

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 25,
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

export default LoginScreen;
