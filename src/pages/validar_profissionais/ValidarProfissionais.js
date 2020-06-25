import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import api from "../../services/api";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
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
      navigation.navigate("GProfissionais");
    } catch (err) {
      console.log("ops");
    }
  }
  async function handleExcluir() {
    try {
      const response = await api.delete(`/profissional/${_id}`);
      alert("Excluído com sucesso");
      navigation.navigate("GProfissionais");
    } catch (err) {
      console.log("ops");
    }
  }
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          style={styles.Logo}
          source={require("../../../assets/perfil/nome.png")}
        />

        <Text style={styles.text}>{nome}</Text>
        <View style={styles.texti}>
          <Text style={styles.dados}>
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/doc.png")}
            />{" "}
            Número do CRP: {crp}
          </Text>
          <Text style={styles.dados}>
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/tel.png")}
            />{" "}
            Telefone: {telefone}
          </Text>
          <Text style={styles.dados}>
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/arro.png")}
            />{" "}
            E-mail: {email}
          </Text>
          <Text style={styles.dados}>
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/desc.png")}
            />{" "}
            Descrição do(s) serviço(s) a se realizar:
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              width: "70%",
              alignSelf: "center",
            }}
          />
          <Text style={styles.dados}>{serv}</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            VALIDAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={handleExcluir}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Recusar/Excluir
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
    width: 140,
    height: 140,
    marginTop: "10%",
  },
  text: {
    color: "#39076A",
    fontSize: 22,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  dados: {
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
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
    marginTop: "5%",
    padding: 15,
  },
  icone: {
    width: 20,
    height: 20,
  },
});
