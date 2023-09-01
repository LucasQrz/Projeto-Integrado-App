import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import EditDrawer from './EditDrawer';
import Home from '../System/Home';
import Favorites from '../System/Favorites';
import Profile from '../System/Profile';
import Settings from '../System/Settings';

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: '100%', height: '100%' }}
      source={require('../Assets/promonet-logo2.png')}
    />
  );
}

export default function SistemaNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <EditDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#000000',
        drawerInactiveTintColor: '#FCFCFC',
        drawerLabelStyle: { marginLeft: -25, fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          headerStyle: { backgroundColor: '#903848' },
          headerTitle: '',
          headerTintColor: '#fff',
          headerBackground: (props) => <LogoTitle {...props} />,
          drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          headerStyle: { backgroundColor: '#903848' },
          headerTitle: '',
          headerTintColor: '#fff',
          headerBackground: (props) => <LogoTitle {...props} />,
          drawerIcon: ({ color }) => <Ionicons name="heart-outline" size={22} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: '#903848' },
          headerTitle: '',
          headerTintColor: '#fff',
          headerBackground: (props) => <LogoTitle {...props} />,
          drawerIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Settings}
        options={{
          headerStyle: { backgroundColor: '#903848' },
          headerTitle: '',
          headerTintColor: '#fff',
          headerBackground: (props) => <LogoTitle {...props} />,
          drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
