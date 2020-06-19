import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Recuperar from "./pages/recuperar/Recuperar";
import Cadastrar from "./pages/cadastrar_servico/CadastrarServico";
import ValidarProfissional from "./pages/validar_profissionais/ValidarProfissionais";
import Opicoes from "./pages/opicoes/Opicao";
import Consultar from "./pages/consultar/Consultar";
import Perfil from "./pages/Perfil/Perfil";
import GProfissionais from "./pages/gerenciar_profissionais/G.Profissionais";
import GServicos from "./pages/gerenciar_servicos/G.Servicos";
import GServ from "./pages/gserv/GServ";
import LConsultarP from "./pages/Profissionais/LConsultarP";
import LValidarP from "./pages/Profissionais/LValidarP";
import ConsultarP from "./pages/consultarp/ConsultarP";

import Draw from "./routes/drawer.routes";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#39076A",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
      initialRouteName="PSYCHO HELP"
    >
      <Stack.Screen name="Consultar" component={Consultar} />
      <Stack.Screen
        name="ValidarProfissional"
        component={ValidarProfissional}
      />
      <Stack.Screen name="ConsultarP" component={ConsultarP} />
      <Stack.Screen
        name="ValidarProfissionais"
        component={ValidarProfissional}
      />
      <Stack.Screen name="GProfissionais" component={GProfissionais} />
      <Stack.Screen name="LConsultarP" component={LConsultarP} />
      <Stack.Screen name="LValidarP" component={LValidarP} />
      <Stack.Screen name="GServicos" component={GServicos} />
      <Stack.Screen name="GServ" component={GServ} />
      <Stack.Screen name="Opicoes" component={Opicoes} />
      <Stack.Screen name="CadastrarServiços" component={Cadastrar} />
      <Stack.Screen name="Recuperar" component={Recuperar} />
      <Stack.Screen name="PSYCHO HELP" component={Draw} />

      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default Routes;
