import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import api from "../../services/api";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
export default function CadastrarProfissionais({ navigation }) {
  const [nome, setNome] = useState("");
  const [crp, setCrp] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [serv, setServico] = useState("");
  
  const [status, setStatus] = useState(0);

  async function handleSubmit() {
    try {
      const response = await api.post("/profissional", {
        nome,
        crp,
        email,
        telefone,
        serv,
        status
      });
    alert("cadastrado com sucesso")
        navigation.navigate("Home");
      
    } catch (err) {}
  }

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Text style={styles.text}>Cadastre os seus dados aqui:</Text>

        <TextInput
          style={styles.texti}
          placeholder="Nome"
          onChangeText={(nome) => setNome(nome)}
          inlineImageLeft={"../../../assets/cabeca.png"}
          placeholderTextColor="#311B92"
          required="true"
        />

        <TextInput
          style={styles.texti}
          placeholder="Número do CRP"
          onChangeText={(crp) => setCrp(crp)}
          keyboardType="number-pad"
          placeholderTextColor="#311B92"
        />
        <TextInput
          style={styles.texti}
          placeholder="E-mail"
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#311B92"
        />
        <TextInput
          style={styles.texti}
          placeholder="Número de Contato"
          onChangeText={(telefone) => setTelefone(telefone)}
          placeholderTextColor="#311B92"
        />
        <TextInput
          style={styles.texti}
          placeholder="Descrição do serviço a ser realizado"
          onChangeText={(serv) => setServico(serv)}
          placeholderTextColor="#311B92"
        />
        <TextInput
          style={styles.texti}
          placeholder="+ Foto"
          placeholderTextColor="#311B92"
        />

        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontStyle: "Roboto",
              fontWeight: "bold",
            }}
          >
            CADASTRAR
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
  text: {
    color: "#39076A",
    fontSize: 18,
    //fontStyle: "Roboto",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginTop: "10%",
  },
  texti: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#3A076C",
  },
  textim: {
    height: 120,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
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
