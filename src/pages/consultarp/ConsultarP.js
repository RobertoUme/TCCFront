import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import api from "../../services/api";

export default function ConsultarP({ route, navigation }) {
  const { nome } = route.params;
  const { crp } = route.params;
  const { email } = route.params;
  const { telefone } = route.params;
  const { serv } = route.params;
  const { _id } = route.params;

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
          >
            Excluir Dados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontStyle: "Roboto",
              fontWeight: "bold",
            }}
          >
            Alterar Dados
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
    height: "30%",
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
    marginTop: "5%",
    padding: 15,
  },
});
