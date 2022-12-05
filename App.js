import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import TelaInicial from './src/TelasInicais/TelaInicial';
import TelaLogin from  './src/TelasInicais/TelaLogin';
import TelaCadastro from './src/TelasInicais/TelaCadastro';
import SistemaNavigator from './src/Routes/SistemaNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaInicial' 
        component={TelaInicial}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaLogin' 
        component={TelaLogin}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaCadastro' 
        component={TelaCadastro}>
        </Stack.Screen>

        <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaSistema'
        component={SistemaNavigator}>
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}