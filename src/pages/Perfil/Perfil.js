import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

export default function Perfil({ route, navigation }) {
  const { nome } = route.params;
  const { tipo } = route.params;
  const { descricao } = route.params;
  const { email } = route.params;
  const { telefone } = route.params;

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
          <Text style={styles.ctext}>
            Profissional: <Text style={styles.stext}>{nome}</Text>
          </Text>
          <Text style={styles.ctext}>
            Serviço realizado: <Text style={styles.stext}>{tipo}</Text>
          </Text>
          <Text style={styles.ctext}>
            Telefone: <Text style={styles.stext}>{telefone}</Text>
          </Text>
          <Text style={styles.ctext}>
            E-mail: <Text style={styles.stext}>{email}</Text>
          </Text>
          <Text style={styles.ctext}>
            Descrição do serviço: <Text style={styles.stext}>{descricao}</Text>
          </Text>
        </View>
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
  ctext: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    paddingLeft: 16,
    paddingTop: 6,
  },
  stext: {
    color: "#39076A",
    fontSize: 14,
    fontWeight: "bold",
    display: "flex",
  },
  texti: {
    height: "40%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
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
