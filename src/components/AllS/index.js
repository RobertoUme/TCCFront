import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
export default function Profissional(props) {
  return (
    <View style={{ flexDirection: "row"}}>
    <View
      style={{ flexDirection: "row", width: "90%",}}
    >
      <Image
        style={styles.Logo}
        source={require("../../../assets/perfil/nome.png")}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.descricao}>{props.tipo}</Text>
      </View>
    </View>
    <View style={{ alignItems:"flex-end" }}>
        {props.vizu == 1 ? (
          <Image
            style={styles.Logo}
            source={require("../../../assets/perfil/correct.png")}
          />
        ) : (
          <Image
          style={styles.Logo}
          source={require("../../../assets/perfil/remove.png")}
        />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  nome: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#39076A",
    fontWeight: "bold",
  },
  Logo: {
    width: 35,
    height: 35,
    alignSelf: "center",
    paddingRight: 20,
  },
});
