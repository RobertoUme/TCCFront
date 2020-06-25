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
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lista.png")}
            />
            <Text style={styles.text}>Validar Profissionais</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateC} style={styles.botao}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lupa2.png")}
            />
            <Text style={styles.text}>Consultar Profissionais</Text>
          </View>
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
    display: "flex",
    marginTop: "10%",
  },
  Logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    height: 100,
    paddingTop: 20,
  },
});
