import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";
import P from "../../components/Profissional/index";

export default function LConsultarP({ navigation: { navigate } }) {
  const [pro, setProfissional] = useState([]);

  useEffect(() => {
    async function loadProfissional() {
      const response = await api.get("/profissionalv");
      setProfissional(response.data);
    }
    loadProfissional();
  }, [pro]);
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "5%" }}
      >
        {pro &&
          pro.map((pro) => (
            <TouchableOpacity
              style={styles.Pessoa}
              key={pro._id}
              onPress={() =>
                navigate("ConsultarP", {
                  name: pro.nome,
                  crp: pro.crp,
                  email: pro.email,
                  telefone: pro.telefone,
                  serv: pro.serv,
                  _id: pro._id,
                })
              }
            >
              <P nome={pro.nome} />
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
    padding: "3%",
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    marginTop: "2%",
  },
  Logo: {
    width: 20,
    height: 20,
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
