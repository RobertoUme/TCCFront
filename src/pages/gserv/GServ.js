import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";
import Serv from "../../components/Servicos/index";

export default function GServ({ navigation: { navigate } }) {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function loadServicos() {
      const response = await api.get("/allservice");
      setServicos(response.data);
    }
    loadServicos();
  }, [servicos]);

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "5%" }}
      >
        {servicos &&
          servicos.map((servicos) => (
            <TouchableOpacity
              style={styles.Pessoa}
              onPress={() =>
                navigate("Consultar", {
                  nome: servicos.profissional.nome,
                  tipo: servicos.tipo,
                  descricao: servicos.descricao,
                })
              }
            >
              <Serv
                key={servicos.profissional.nome}
                nome={servicos.profissional.nome}
                tipo={servicos.tipo}
              />
            </TouchableOpacity>
          ))}
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  top: {
    backgroundColor: "black",
    flex: 1,
  },
  Pessoa: {
    borderWidth: 0,
    width: "89%",
    height: 52,
    padding: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    marginTop: "2%",
  },
  Logo: {
    width: 20,
    height: 20,
    marginRight: "20px",
    alignSelf: "flex-start",
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    // fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
});
