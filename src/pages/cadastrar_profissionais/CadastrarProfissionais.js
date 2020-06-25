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
        status,
      });
      alert("cadastrado com sucesso");
      navigation.navigate("Home");
    } catch (err) {
      console.log("Preencha todos os campos");
    }
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
          placeholder="Nome:"
          onChangeText={(nome) => setNome(nome)}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
          required="true"
        />

        <TextInput
          style={styles.texti}
          placeholder="Número do CRP:"
          onChangeText={(crp) => setCrp(crp)}
          keyboardType="number-pad"
          placeholderTextColor="rgba(49, 27, 146,0.45)"
        />
        <TextInput
          style={styles.texti}
          placeholder="E-mail:"
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
        />
        <TextInput
          style={styles.texti}
          placeholder="Número de Contato:"
          onChangeText={(telefone) => setTelefone(telefone)}
          keyboardType="number-pad"
          placeholderTextColor="rgba(49, 27, 146,0.45)"
        />
        <TextInput
          style={styles.textim}
          numberOfLines={8}
          placeholder="Descrição do serviço a ser realizado:"
          textAlignVertical={"top"}
          onChangeText={(serv) => setServico(serv)}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
        />
        <Text style={styles.textaviso}>
          Os dados serão verificados pelo administrador e caso sejam aprovados
          será registrado um serviço em seu nome, em caso de dados inválidos o
          cadastro pode ser cancelado!
        </Text>
        <Text style={styles.textaviso}>
          Em caso de duvidas entre em contato no E-mail: ifms@edu.br.
        </Text>
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
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginTop: "10%",
  },
  textaviso: {
    color: "#39076A",
    fontSize: 14,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginTop: "2%",
    marginHorizontal: 10,
  },
  texti: {
    height: 50,
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
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    fontWeight: "bold",
    padding: 10,
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
    padding: 25,
  },
});
