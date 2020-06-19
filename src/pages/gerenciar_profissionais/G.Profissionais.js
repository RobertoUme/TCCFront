import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GProfissionais({ navigation }) {
  function navigateV() {
    navigation.navigate("LValidarP");
  }
  function navigateC() {
    navigation.navigate("LConsultarP");
  }
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "25%" }}
      >
        <TouchableOpacity onPress={navigateV} style={styles.botao}>
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/cabeca.png")}
            />
            Validar Profissionais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateC} style={styles.botao}>
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/celular.png")}
            />
           Consultar Profissionais
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  top: {
    backgroundColor: "black",
    flex: 1,
  },
  botao: {
    borderWidth: 0,
    width: "80%",
    height: "25%",
    padding: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    marginTop: "10%",
  },
  Logo: {
    width: 70,
    height: 70,
    marginRight: "50px",
  },
  text: {
    color: "#39076A",
    fontSize: 18,
   // fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems:"center"
  },
});
