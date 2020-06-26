import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
export default function Oeb({ navigation }) {
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <ScrollView style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <Text style={styles.text}>
            É uma área da psicologia que nasce durante as últimas décadas do
            século XX, no encontro entre Ecologia e Psicologia, reconhecendo a
            desconexão e a perda do senso de coparticipação com o mundo e o
            ambiente em que se vive. Utilizando a Natureza como ferramenta
            terapêutica, algumas doenças/distúrbios podem ser tratados, tais
            como, o transtorno de déficit de atenção e hiperatividade.
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
