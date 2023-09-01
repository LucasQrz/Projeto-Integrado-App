import 'react-native-gesture-handler';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './src/TelasInicais/TelaInicial';
import TelaLogin from './src/TelasInicais/TelaLogin';
import TelaCadastro from './src/TelasInicais/TelaCadastro';
import SistemaNavigator from './src/Routes/SistemaNavigator';
import Detalhes from './src/Sistema/Detalhes';
import Favoritos from './src/Sistema/Favoritos';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: '100%', height: '100%' }}
      source={require('./src/Assets/promonet-logo2.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: '',
            statusBarColor: '#903848', //mudar a cor barra de notificações
            statusBarStyle: 'light',
            headerTransparent: true,
            headerShown: false,
            headerBackground: (props) => <LogoTitle {...props} />,
          }}
          name="TelaInicial"
          component={TelaInicial}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTintColor: 'white',
            statusBarColor: '#903848',
            statusBarStyle: 'light',
            headerTransparent: false,
            headerShown: true,
            headerBackground: (props) => <LogoTitle {...props} />,
          }}
          name="TelaLogin"
          component={TelaLogin}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTintColor: 'white',
            statusBarColor: '#903848',
            statusBarStyle: 'light',
            headerTransparent: false,
            headerShown: true,
            headerBackground: (props) => <LogoTitle {...props} />,
          }}
          name="TelaCadastro"
          component={TelaCadastro}
        />

        <Stack.Screen
          options={{
            title: '',
            statusBarColor: '#903848',
            statusBarStyle: 'light',
            headerTransparent: false,
            headerShown: false,
          }}
          name="SistemaNavigator"
          component={SistemaNavigator}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTintColor: 'white',
            headerTransparent: false,
            headerShown: true,
            statusBarColor: '#903848',
            statusBarStyle: 'light',
            headerTitleAlign: 'center',
            headerBackground: (props) => <LogoTitle {...props} />,
          }}
          name="Detalhes"
          component={Detalhes}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTintColor: 'white',
            headerTransparent: false,
            headerShown: true,
            statusBarColor: '#903848',
            statusBarStyle: 'light',
            headerTitleAlign: 'center',
            headerBackground: (props) => <LogoTitle {...props} />,
          }}
          name="Favoritos"
          component={Favoritos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
