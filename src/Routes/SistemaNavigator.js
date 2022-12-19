import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Inicio from '../Sistema/Inicio';
import Avaliados from '../Sistema/Avaliados';
import Config from '../Sistema/Config';
import Perfil from '../Sistema/Perfil';
import Lista from '../Sistema/ListaFilmes';
import EditDrawer from './EditDrawer';

const Drawer = createDrawerNavigator();

export default function SistemaNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <EditDrawer{...props}/>}
            screenOptions={{
            drawerActiveBackgroundColor: '#954DFF',
            drawerActiveTintColor: '#000000',
            drawerInactiveTintColor: '#FCFCFC',
            drawerLabelStyle: {marginLeft: -25, fontSize: 16}}} >

            <Drawer.Screen name="Inicio" component={Inicio} 
                options={{headerStyle: 
                {backgroundColor: '#000000'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='planet-outline' size={22} color={color} />
            )}}
            />

             <Drawer.Screen name="Lista de Filmes" component={Lista} 
                options={{headerStyle: 
                {backgroundColor: '#26034D'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='list-outline' size={22} color={color} />
            )}}
            />

            <Drawer.Screen name="Avaliados" component={Avaliados} 
                options={{headerStyle: 
                {backgroundColor: '#26034D'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='star-outline' size={22} color={color} />
            )}}
            />

            <Drawer.Screen name="Perfil" component={Perfil} 
                options={{headerStyle: 
                {backgroundColor: '#26034D'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='person-outline' size={22} color={color} />
            )}}
            />
            
            <Drawer.Screen name="Configurações" component={Config} 
                options={{headerStyle: 
                {backgroundColor: '#26034D'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='settings-outline' size={22} color={color} />
            )}}
            />
        </Drawer.Navigator>
    );    
}