import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
export default function OB({ navigation }) {
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <ScrollView style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <Text style={styles.text}>
            Segundo Doss (2018), em algum momento da nossa evolução, houve um
            distanciamento físico e psicológico do homem com a natureza e, como
            consequências surgiram às psicopatologias e as atitudes destrutivas
            advindas do novo modo como o homem se relaciona com o ambiente,
            culminando na atual crise de insustentabilidade. Com isso, surgiu a
            necessidade de uma ciência psicológica que pudesse reconectar o ser
            humano com o seu meio natural com a finalidade de “curar” os males
            que vieram decorrente desse distanciamento, ou seja, a natureza como
            remédio. Daí surgiu a Ecopsicologia, uma nova prática da psicologia,
            que promove desenvolver um vínculo emocional entre os seres humanos
            e o meio natural. {"\n"}Considerada uma ciência ainda emergente, e
            sendo também um termo pouco conhecido no meio popular.
          </Text>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    margin: "5%",
  },
});
