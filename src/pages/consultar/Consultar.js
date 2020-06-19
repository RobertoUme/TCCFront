import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
export default function Consultar({ navigation, route }) {
  const { nome } = route.params;
  const { tipo } = route.params;
  const { descricao } = route.params;

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Text style={styles.text}>{tipo}</Text>
        <Text style={styles.text}>{nome}</Text>
        <Text style={styles.texti}>{descricao}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontStyle: "Roboto",
              fontWeight: "bold",
            }}
          >
            Ocultar Dados
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
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
  },
  texti: {
    height: "15%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    color: "#39076A",
    fontSize: 16,
    //fontFamily: ' sans-serif ',
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
