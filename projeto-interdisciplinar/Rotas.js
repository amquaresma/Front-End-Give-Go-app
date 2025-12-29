import { createStackNavigator } from '@react-navigation/stack';
import Home2 from "./Postagem/Home2";
import Home from "./Postagem/Home";
import Login from "./Login/Login";
import Cadastro from "./Login/Cadastro";
import Welcome from "./Login/Welcome";
import Postados from "./Postar/Postados";
import Confirmar from "./Caixinha/Confirmar";
import Home3 from "./Postagem/Home3";
import Scroll from "./Scroll";
import Perfil from "./Menu/Perfil";
import Perfil2 from "./Menu/Perfil2";
import Falar from "./Menu/FaleConosco";
import Falar2 from "./Menu/FaleConosco2";
import Calcas from "./Roupas/calcas";
import Blusas from "./Roupas/blusas";
import Tenis from "./Roupas/tenis";
import Casaco from "./Roupas/casaco";
import Roupas from "./Roupas/roupas";
import Cobertores from "./Roupas/cobertores";
import Mochilas from "./Roupas/mochilas";
import Sapatos from "./Roupas/sapatos";
import Confirmar2 from "./Caixinha/Confirmar2";

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login} options={{
        headerShown:false
        }}/>
     <Stack.Screen name="Cadastro" component={Cadastro} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Perfil2" component={Perfil2} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Perfil" component={Perfil} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Home3" component={Home3} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Scroll" component={Scroll} options={{
        headerShown:false
        }}/>
        
      <Stack.Screen name="Home" component={Home}  options={{
        headerShown: false
        }}/>

      
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown:false
        }}/>
      
      <Stack.Screen name="Home2" component={Home2}  options={{
        headerShown: false
        }}/>

      <Stack.Screen name="Postados" component={Postados}  options={{
        headerShown: false
        }}/>

      <Stack.Screen name="Confirmar" component={Confirmar}  options={{
        headerShown: false
        }}/>

      <Stack.Screen name="FaleConosco" component={Falar} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="FaleConosco2" component={Falar2} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Calcas" component={Calcas} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Blusas" component={Blusas} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Tenis" component={Tenis} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Casaco" component={Casaco} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Roupas" component={Roupas} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Cobertores" component={Cobertores} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Mochilas" component={Mochilas} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Sapatos" component={Sapatos} options={{
        headerShown:false
        }}/>

      <Stack.Screen name="Confirmar2" component={Confirmar2} options={{
        headerShown:false
        }}/>

    </Stack.Navigator>
  );
}