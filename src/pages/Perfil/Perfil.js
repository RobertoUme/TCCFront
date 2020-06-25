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
          source={require("../../../assets/perfil/nome.png")}
        />
        <Text style={styles.ctext}>{nome}</Text>
        <View style={styles.container}>
          <Text
            style={{
              color: "#39076A",
              fontSize: 18,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingBottom: 10,
              paddingTop: 17,
              paddingLeft: 5,
              alignSelf: "center",
            }}
          >
            {tipo}
          </Text>
          <View
            style={{ borderWidth: 0.5, width: "70%", alignSelf: "center" }}
          />
          <Text style={styles.text}>
            Contato:{"\n"}
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/tel.png")}
            />
            <Text style={styles.stext}> {telefone}</Text>
            {"\n"}
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/arro.png")}
            />
            <Text style={styles.stext}> {email}</Text>
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              width: "70%",
              alignSelf: "center",
              marginTop: 5,
            }}
          />
          <Text style={styles.text}>
            Descrição do serviço:{"\n"}
            <Image
              style={styles.icone}
              source={require("../../../assets/perfil/doc.png")}
            />
            <Text style={styles.stext}> {descricao}</Text>
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
    width: 170,
    height: 170,
    marginTop: "20%",
  },
  icone: {
    width: 20,
    height: 20,
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    paddingBottom: 3,
    paddingTop: 10,
    paddingLeft: 5,
  },
  ctext: {
    color: "#39076A",
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    paddingTop: 5,
    paddingBottom: 10,
  },
  stext: {
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    paddingLeft: 10,
  },
  container: {
    height: "50%",
    borderColor: "white",
    borderWidth: 1,
    width: "82%",
    borderRadius: 8,
    marginTop: "5%",
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
});
