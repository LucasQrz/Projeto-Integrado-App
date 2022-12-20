import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import TelaInicial from './src/TelasInicais/TelaInicial';
import TelaLogin from  './src/TelasInicais/TelaLogin';
import TelaCadastro from './src/TelasInicais/TelaCadastro';
import SistemaNavigator from './src/Routes/SistemaNavigator';

import Detalhes from './src/Sistema/Detalhes';
import Playlist from './src/Sistema/Playlist';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaInicial' 
        component={TelaInicial}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaLogin' 
        component={TelaLogin}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaCadastro' 
        component={TelaCadastro}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#000000',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='SistemaNavigator' 
        component={SistemaNavigator}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: 'Detalhes',
          headerStyle: { backgroundColor: '#26034D' },
          headerTintColor: 'white',
          headerTransparent: false,
          headerShown: true,
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTitleAlign:'center'
        }}
        name='Detalhes' 
        component={Detalhes}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: 'Playlist',
          headerTintColor: 'white',
          headerStyle:{backgroundColor: '#26034D'},
          headerTransparent: false,
          headerShown: true,
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTitleAlign:'center'
        }}
        name='Playlist' 
        component={Playlist}>
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

