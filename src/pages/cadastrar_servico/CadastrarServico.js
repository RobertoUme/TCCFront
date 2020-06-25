import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-community/picker";

import api from "../../services/api";

export default function CadastrarServico({ navigation }) {
  const [profissionalid, setProfissionalid] = useState([]);
  
  const [profissional, setProfissional] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [visualizacao, setVi] = useState(1);

  useEffect(() => {
    const populateProfissional = async () => {
      const requisicao = await api.get(`/profissionalv`);
      setProfissionalid(requisicao.data);
    };
    populateProfissional();
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.post("/service", {
        profissional,
        tipo,
        descricao,
        visualizacao,
      });
      alert("cadastrado com sucesso");
      navigation.navigate("GServicos");
    } catch (err) {}
  }

  return (
    <View style={styles.top}>
      <LinearGradient
        colors={["#9ddaff", "#ebbcff"]}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          style={styles.Logo}
          source={require("../../../assets/psycho-help.png")}
        />
        <Text style={styles.text}>PSYCO HELP</Text>

        <TouchableOpacity style={styles.select}>
          <Picker
            selectedValue={profissional}
            style={{ height: 45, width: 320}}
            onValueChange={(profissionalid) => setProfissional(profissionalid)}
          >
            {profissionalid &&
              profissionalid.map(({ _id, nome }) => (
                <Picker.Item label={nome} key={_id} value={_id}></Picker.Item>
              ))}
          </Picker>
        </TouchableOpacity>

        <TextInput
          style={styles.texti}
          placeholder="Tipo do serviço:"
          onChangeText={(tipo) => setTipo(tipo)}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
        />
        <TextInput
          style={styles.textim}
          multiline
          numberOfLines={4}
          onChangeText={(descricao) => setDescricao(descricao)}
          placeholderTextColor="rgba(49, 27, 146,0.45)"
          placeholder="Descrição:"
          textAlignVertical={"top"}
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
  Logo: {
    width: 100,
    height: 100,
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
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    padding: 10,
  },
  textim: {
    height: 120,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
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
    marginTop: "10%",
    padding: 15,
  },
  select: {
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginTop: "5%",
    height: 50,
  },
});
