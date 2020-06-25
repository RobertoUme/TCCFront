import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

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
import { StoreProvider, useStore } from "./services/store";
import { useAuth } from "./services/auth";

const Stack = createStackNavigator();

function Loading() {
  <ActivityIndicator style={{ flex: 1, color: "#fff" }} />;
}

const Router = () => {
  const [store] = useStore();

  if (!store.rehydrated) {
    <Loading />;
  }
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
      {store.auth ? (
        <>
          <Stack.Screen
            options={{ title: "Opições" }}
            name="Opicoes"
            component={Opicoes}
            Route
            isPrivate
          />
          <Stack.Screen
            options={{ title: "Dados do Serviço" }}
            name="Consultar"
            component={Consultar}
          />
          <Stack.Screen
            name="ValidarProfissional"
            component={ValidarProfissional}
          />
          <Stack.Screen
            options={{ title: "Dados do Profissional" }}
            name="ConsultarP"
            component={ConsultarP}
          />
          <Stack.Screen
            options={{ title: "Validar Profissionais" }}
            name="ValidarProfissionais"
            component={ValidarProfissional}
          />
          <Stack.Screen
            name="GProfissionais"
            options={{ title: "Gerenciar Profissionais" }}
            component={GProfissionais}
            isPrivate
          />
          <Stack.Screen
            options={{ title: "Consultar Profissionais" }}
            name="LConsultarP"
            component={LConsultarP}
            isPrivate
          />
          <Stack.Screen
            options={{ title: "Validar Profissionais" }}
            name="LValidarP"
            component={LValidarP}
            isPrivate
          />
          <Stack.Screen
            options={{ title: "Gerenciar Serviços" }}
            name="GServicos"
            component={GServicos}
            isPrivate
          />
          <Stack.Screen
            options={{ title: "Consultar Serviços" }}
            name="GServ"
            component={GServ}
            isPrivate
          />

          <Stack.Screen
            options={{ title: "Cadastrar Serviços" }}
            name="CadastrarServiços"
            component={Cadastrar}
            isPrivate
          />
          <Stack.Screen name="Recuperar" component={Recuperar} isPrivate />
        </>
      ) : (
        <>
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="PSYCHO HELP" component={Draw} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default Router;
