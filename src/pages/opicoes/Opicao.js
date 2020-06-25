import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { useAuth } from "../../services/auth";

export default function Opicao({ navigation }) {
  function NavigationToGP() {
    navigation.navigate("GProfissionais");
  }
  function NavigationToGS() {
    navigation.navigate("GServicos");
  }
  const [, { logout }] = useAuth();
  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#06A5F5", "#9E36FE"]}
        style={{ flex: 1, alignItems: "center", paddingTop: "25%" }}
      >
        <TouchableOpacity onPress={NavigationToGP} style={styles.botao}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/cabeca.png")}
            />
            <Text style={styles.text}>Gerenciar Profissionais</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={NavigationToGS} style={styles.botao}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../../assets/celular.png")}
            />
            <Text style={styles.text}>Gerenciar Serviços</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sair} onPress={logout}>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              padding: 2,
            }}
          >
            Sair do Sistema   {''}
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../../assets/logout.png")}
            />
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
    display: "flex",
    marginTop: "10%",
  },
  sair: {
    borderWidth: 0,
    width: "60%",
    height: "12%",
    padding: "5%",
    backgroundColor: "#d60019",
    borderRadius: 10,
    display: "flex",
    marginTop: "30%",
    alignItems: "center",
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
