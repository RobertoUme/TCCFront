import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import api from "../../services/api";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

export default function ValidarProfissionais({ route, navigation }) {
  const [status, setStatus] = useState(1);
  const { nome } = route.params;
  const { crp } = route.params;
  const { email } = route.params;
  const { telefone } = route.params;
  const { serv } = route.params;
  const { _id } = route.params;

  async function handleSubmit() {
    try {
      const response = await api.put(`/profissional/${_id}`, {
        nome,
        crp,
        email,
        telefone,
        serv,
        status,
      });
      alert("Validado com sucesso");
      navigation.navigate("LValidarP");
    } catch (err) {}
  }

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
        <Text style={styles.text}>IMAGEM TESTE</Text>
        <View style={styles.texti}>
          <Text>Nome: {nome}</Text>
          <Text>CRP: {crp}</Text>
          <Text>Email: {email}</Text>
          <Text>Telefone: {telefone}</Text>
          <Text>Serviços a serem realizados: {serv}</Text>
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontStyle: "Roboto",
              fontWeight: "bold",
            }}
            onPress={handleSubmit}
          >
            VALIDAR
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
    // fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  texti: {
    height: "40%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    color: "#39076A",
    fontSize: 16,
    // fontStyle: "Roboto",
    fontWeight: "bold",
  },
  botao: {
    borderWidth: 0,
    width: "80%",
    height: "10%",
    backgroundColor: "#A13CFE",
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    marginTop: "10%",
    padding: 15,
  },
});
