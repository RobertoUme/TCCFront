import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";
import Prof from "../../components/Profissional/index";
export default function LValidarP({ navigation: { navigate } }) {
  const [profissional, setProfissional] = useState([]);

  useEffect(() => {
    async function loadProfissional() {
      const response = await api.get("/profissionalnv");
      setProfissional(response.data);
    }
    loadProfissional();
  }, [profissional]);
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "5%" }}
      >
        <Text style={styles.text}>Pedidos pendentes:</Text>

        {profissional &&
          profissional.map((profissional) => (
            <TouchableOpacity
              style={styles.Pessoa}
              onPress={() =>
                navigate("ValidarProfissionais", {
                  nome: profissional.nome,
                  crp: profissional.crp,
                  email: profissional.email,
                  telefone: profissional.telefone,
                  serv: profissional.serv,
                  _id: profissional._id,
                })
              }
            >
              <Prof nome={profissional.nome} />
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
    height: 60,
    padding: "4%",
    backgroundColor: "white",
    borderRadius: 10,
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
