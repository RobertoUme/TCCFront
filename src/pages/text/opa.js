import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
export default function OPA({ navigation }) {
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <ScrollView style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <Text style={styles.text}>
            Utilizando a Natureza como ferramenta terapêutica, algumas
            doenças/distúrbios podem ser tratados, tais como, o transtorno de
            déficit de atenção e hiperatividade (CARVALHO, 2013), alguns
            distúrbios no sono, tendo como consequência melhora no bem-estar
            físico e emocional de quem a está praticando. Se for utilizada
            constantemente desde cedo, também pode ser utilizada como meio
            alternativo para o tratamento de obesidade infantil. A convivência
            com a natureza, baseada na eco-psicoterapia (natureza como
            ferramenta terapêutica), pode evitar vários problemas respiratórios
            e renais. E também pode auxiliar no tratamento da depressão
            (BERNARDO, 2017).
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
