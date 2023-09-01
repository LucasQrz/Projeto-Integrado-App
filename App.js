import 'react-native-gesture-handler';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

import SistemaNavigator from './src/Routes/SistemaNavigator';

import Details from './src/System/Details';
import Favorites from './src/System/Favorites';

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
          name="HomeScreen"
          component={HomeScreen}
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
          name="LoginScreen"
          component={LoginScreen}
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
          name="RegisterScreen"
          component={RegisterScreen}
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
          name="Details"
          component={Details}
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
          name="Favorites"
          component={Favorites}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
