import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { useFormik } from "formik";
import { useAuth } from "../../services/auth";
import api from "../../services/api";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Login({ navigation }) {
  const [state, setState] = useState(false);
  const [, { login }] = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const { data } = await api.post("/sessions", values);

        login(data);
      } catch (error) {
        console.log("Preencha todos os campos");
        setState("Login ou senha inválidos");
      }
    },
  });

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          style={styles.Logo}
          source={require("../../../assets/psycho-help.png")}
        />
        <Text style={styles.text}>PSYCHO HELP</Text>
        
        <TextInput
          style={styles.texti}
          placeholder=" Digite seu email"
          value={formik.values.email}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
          onChangeText={formik.handleChange("email")}
        />
        <TextInput
          style={styles.texti}
          placeholder=" Digite sua senha"
          value={formik.values.password}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
          onChangeText={formik.handleChange("password")}
          secureTextEntry={true}
        />

        {state && <Text style={{color:"red"}}>{state}</Text>}

        <TouchableOpacity style={styles.botao} onPress={formik.handleSubmit}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  Logo: {
    width: 100,
    height: 100,
    marginTop: "20%",
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  texti: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    backgroundColor:"rgba(255, 255, 255,0.1)"

  },
  botao: {
    borderWidth: 0,
    width: "80%",
    height: 100,
    backgroundColor: "#A13CFE",
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    marginTop: "10%",
    padding: 25,
  },
});
