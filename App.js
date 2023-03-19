//Home
import HomeScreen from "./src/screens/HomeScreen"

//Tema Animales
import Animales from "./src/screens/Animales";
import AnimalesF from "./src/screens/AnimalesF";

//Tema figuras
import Figuras from "./src/screens/Figuras";
import FigurasF from "./src/screens/FIgurasF";

//Tema colores
import Colores from "./src/screens/Colores";
import ColoresF from "./src/screens/ColoresF";

//Tema cosas
import Cosas from "./src/screens/Cosas";
import CosasF from "./src/screens/CosasF";


//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         {/*Home*/}
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false}}
          title
        />
        {/*Animales*/}
        <Stack.Screen 
          name="Animales"
          component={Animales}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true}}
        />
        <Stack.Screen 
          name="AnimalesF"
          component={AnimalesF}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        {/*Figuras*/}
        <Stack.Screen 
          name="Figuras"
          component={Figuras}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        <Stack.Screen 
          name="FigurasF"
          component={FigurasF}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        {/*Colores*/}
        <Stack.Screen 
          name="Colores"
          component={Colores}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        <Stack.Screen 
          name="ColoresF"
          component={ColoresF}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        {/*Cosas*/}
        <Stack.Screen 
          name="Cosas"
          component={Cosas}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
        <Stack.Screen 
          name="CosasF"
          component={CosasF}
          options={{title: '',
          headerTransparent: true,
          headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

