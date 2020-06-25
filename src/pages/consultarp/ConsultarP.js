import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import api from "../../services/api";

export default function ConsultarP({ route, navigation }) {
  const { name } = route.params;
  const { crp } = route.params;
  const { email } = route.params;
  const { telefone } = route.params;
  const { serv } = route.params;
  const { _id } = route.params;

  async function handleExcluir() {
    try {
      const response = await api.delete(`/profissional/${_id}`);
      alert("Excluído com sucesso");
      navigation.navigate("GProfissionais");
    } catch (err) {
      console.log("ops");
    }
  }


  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          style={styles.Logo}
          source={require("../../../assets/perfil/nome.png")}
        />
        
        <View style={styles.texti}>
          <Text style={styles.dados}>Nome: {name}</Text>
          <Text style={styles.dados}>E-mail: {email}</Text>
          <Text style={styles.dados}>Número do CRP: {crp}</Text>
          <Text style={styles.dados}>Telefone: {telefone}</Text>
          <Text style={styles.dados}>Descrição do(s) serviço(s) a se realizar:{"\n"}
           {serv}</Text>
        </View>
        <TouchableOpacity style={styles.botao}  onPress={handleExcluir} >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Excluir Dados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Alterar Dados
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
    width: 150,
    height: 150,
    marginTop: "20%",
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  texti: {
    height: "30%",
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    color: "#39076A",
    fontSize: 16,
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
    marginTop: "5%",
    padding: 24,
  },
  dados: {
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    paddingLeft:10,
    paddingTop:5
  },
});
