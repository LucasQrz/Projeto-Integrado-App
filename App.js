import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import TelaInicial from './Telas/TelaInicial';
import TelaLogin from  './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';
import TelaSistema from './Telas/TelaSistema';

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
        component={TelaSistema}>
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}