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
import { Picker } from "@react-native-community/picker";
import api from "../../services/api";
export default function Consultar({ navigation, route }) {
  const [visualizacao, setInv] = useState(0);
  const [vizu, sets] = useState(1);
  const { nome } = route.params;
  const { tipo } = route.params;
  const { descricao } = route.params;
  const { _id } = route.params;
  const { profissional } = route.params;
  const { vi } = route.params;

  const [ti, setTipo] = useState(tipo);
  const [desc, setDesc] = useState(descricao);

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
  async function handeaparece() {
    try {
      const response = await api.put(`/service/${_id}`, {
        profissional,
        tipo,
        descricao,
        visualizacao: vizu,
      });
      alert("Desocultado com sucesso");
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
  async function handlealt() {
    try {
      const response = await api.put(`/service/${_id}`, {
        profissional,
        tipo: ti,
        descricao: desc,
        visualizacao: vi,
      });
      alert("Ocultado com sucesso");
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
        <Text style={styles.nome}>
        { nome }
        </Text>
        <TextInput
          style={styles.texti}
          value={ti}
          onChangeText={(ti) => setTipo(ti)}
        />
        <TextInput
          style={styles.text}
          value={desc}
          onChangeText={(desc) => setDesc(desc)}
          multiline
          numberOfLines={4}
          textAlignVertical={"top"}
        />
        {vi == 1 ? (
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
        ) : (
          <TouchableOpacity style={styles.botao} onPress={handeaparece}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontStyle: "Roboto",
                fontWeight: "bold",
              }}
            >
              Desocultar Dados
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.botao} onPress={handleExcluir}>
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
        <TouchableOpacity style={styles.botao} onPress={handlealt}>
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
    height: 120,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    padding: 6,
    color: "#39076A",
    fontWeight: "bold",
    fontSize: 16,
  },
  texti: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "3%",
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 6,
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
  nome: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "3%",
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 6,
    paddingTop:15,
    backgroundColor: "rgba(255,255,255,0.4)"
  },
});
