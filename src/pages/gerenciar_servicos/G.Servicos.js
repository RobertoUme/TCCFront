import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

export default function GServicos({ navigation }) {
  function NavigationToCS() {
    navigation.navigate("CadastrarServiços");
  }
  function NavigationToConS() {
    navigation.navigate("GServ");
  }
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "25%" }}
      >
        <TouchableOpacity onPress={NavigationToCS} style={styles.botao}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lista.png")}
            />
            <Text style={styles.text}>Cadrastar Serviço</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={NavigationToConS} style={styles.botao}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lupa.png")}
            />
            <Text style={styles.text}>Consultar Serviços</Text>
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
