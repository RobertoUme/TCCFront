import React from "react";
import { Text, StyleSheet, View } from "react-native";
export default function Profissional(props) {
  return (
    <View>
      <Text style={styles.nome}>{props.nome}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  nome: {
    color: "black",
    fontSize: 18,
  },
});
