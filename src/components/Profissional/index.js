import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
export default function Profissional(props) {
  return (
    <View style={{flexDirection:"row", }}>
      <Image
        style={styles.Logo}
        source={require("../../../assets/perfil/nome.png")}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.nome}>{props.nome}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  nome: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop:5
  },
  Logo: {
    width: 35,
    height: 35,
    alignSelf: "center",
    paddingRight: 20,
  },
});
