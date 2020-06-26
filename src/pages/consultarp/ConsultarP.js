import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import api from "../../services/api";

export default function ConsultarP({ route, navigation}) {

  const { name } = route.params;
  const { crp } = route.params;
  const { email } = route.params;
  const { telefone } = route.params;
  const { serv } = route.params;
  const { _id } = route.params;

  const [nome, setNome] = useState(name)
  const [CRP, setCRP] = useState(crp)
  const [em, setEm] = useState(email)
  const [tel, setTel] = useState(telefone)
  const [desc, setDesc] = useState(serv)

  async function handleExcluir() {
    try {
      const response = await api.delete(`/profissional/${_id}`);
      alert("Excluído com sucesso");
      navigation.navigate("GProfissionais");
    } catch (err) {
      console.log("ops");
    }
  }
  async function handleSubmit() {
    try {
      const response = await api.put(`/profissional/${_id}`, {
        nome,
        crp:CRP,
        email:em,
        telefone:tel,
        serv:desc,
        status:1,
      });
      alert("Alterado com sucesso");
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
        <TextInput style={styles.texti} value={nome}  onChangeText={(nome) => setNome(nome)}/>
        <TextInput style={styles.texti} value={CRP?(JSON.stringify(CRP)):("")} keyboardType="number-pad" onChangeText={(CRP) => setCRP(parseInt(CRP))} />
        <TextInput style={styles.texti} value={em}  onChangeText={(em) => setEm(em)} />
        <TextInput style={styles.texti} value={tel?(JSON.stringify(tel)):("")} keyboardType="number-pad"  onChangeText={(tel) => setTel(parseInt(tel))} />
        <TextInput style={styles.texti} value={desc}  onChangeText={(desc) => setDesc(desc)} />
        <TouchableOpacity style={styles.botao} onPress={handleExcluir}>
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
        <TouchableOpacity
          style={styles.botao}
          onPress={handleSubmit}
        >
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
    width: 130,
    height: 130,
    marginTop: "10%",
  },
  text: {
    color: "#39076A",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  texti: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "3%",
    color: "#39076A",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft:6
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
    paddingLeft: 10,
    paddingTop: 5,
  },
});
