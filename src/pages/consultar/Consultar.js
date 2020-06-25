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
import api from "../../services/api";
export default function Consultar({ navigation, route }) {
  const [val, setVal] = useState(1);
  const [visualizacao, setInv] = useState(0);
  const { nome } = route.params;
  const { tipo } = route.params;
  const { descricao } = route.params;
  const { _id } = route.params;
  const { profissional } = route.params;

  async function handleocult() {
    try {
      const response = await api.put(`/service/${_id}`, {
        profissional,
        tipo,
        descricao,
        visualizacao,
      });
      alert("Ocultado com sucesso");
      navigation.navigate("GServicos");
    } catch (err) {
      console.log("ops");
    }
  }
  async function handleExcluir() {
    try {
      const response = await api.delete(`/service/${_id}`);
      alert("Excluído com sucesso");
      navigation.navigate("GServicos");
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
        <Text style={styles.texti}>
          Serviço: {tipo}
          {"\n"}
          {"\n"}
          Profissional: {nome} {"\n"}
          {"\n"}
          Descrição: {descricao}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={handleocult}>
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
        <TouchableOpacity style={styles.botao}  onPress={handleExcluir}>
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
    padding: 10,
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
  },
  texti: {
    height: "40%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    padding: 10,
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
});
