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
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lista.png")}
            />
            Cadrastar Serviço
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={NavigationToConS} style={styles.botao}>
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/lupa.png")}
            />
            Consultar Serviços
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
    //fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems:"center"
  },
});
