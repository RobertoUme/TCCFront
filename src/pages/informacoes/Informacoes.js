import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
export default function Informacoes({ navigation })  {
    function NavigationToob() {
      navigation.navigate("ob");
    }
    function NavigationTooqe() {
      navigation.navigate("oqe");
    }
    function NavigationToopa() {
      navigation.navigate("opa");
    }

   

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "5%" }}
      >
        <TouchableOpacity style={styles.botao}  onPress={NavigationTooqe} >
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/question.png")}
            />
            O que é Ecopsicologia?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={NavigationToob}>
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/book.png")}
            />
            Origem da Ecopsicologia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={NavigationToopa}>
          <Text style={styles.text}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/cell.png")}
            />
            Aplicações da Ecopsicologia
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
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    marginTop: "10%",
  },
  Logo: {
    width: 70,
    height: 70,
    marginRight: "50px"
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    height:"100%",
    fontWeight: "bold",
    display: "flex",
    alignItems:"center",
    alignSelf:"center",
    paddingTop:20
  },
});
