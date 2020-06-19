import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Recuperar({ navigation }) {
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
        <Text style={styles.text}>PSYCHO HELP</Text>
        <Text style={styles.texti}>Ao apertaro botão abaixo iremos enviar a senha novamente ao e-mail do administrador para que possa ser recuperada!</Text>
        <TouchableOpacity style={styles.botao}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontStyle: "Roboto",
              fontWeight: "bold",
            }}
          >
           RECUPERAR A SENHA
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
    color: "#39076A",
    fontSize: 18,
   // fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  texti: {
    height: "15%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    color: "#39076A",
    fontSize: 16,
    //fontStyle: "Roboto",
    fontWeight: "bold",

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
