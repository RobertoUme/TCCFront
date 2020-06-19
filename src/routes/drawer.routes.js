import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Informacoes from "../pages/informacoes/Informacoes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import CadastrarProfissionais from "../pages/cadastrar_profissionais/CadastrarProfissionais";
const Drawer = createDrawerNavigator();

function Draw() {
  return (
    <Drawer.Navigator drawerType="slide" initialRouteName="Home" drawerStyle={{
      backgroundColor: '#3A076C',
    }}drawerContentOptions={{
      inactiveTintColor:"#fff",
      activeTintColor: "#ffc4ff",
      itemStyle: { marginVertical: 10, padding:10 },
    }} >
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Acessar como Administrador" component={Login} />
      <Drawer.Screen
        name="Gostaria de se Cadastrar?"
        component={CadastrarProfissionais}
      />
      <Drawer.Screen name="Informações" component={Informacoes} />
    </Drawer.Navigator>
  );
}

export default Draw;
