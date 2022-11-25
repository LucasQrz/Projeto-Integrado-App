import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Text } from 'react-native'

import Inicio from './Sistema/Inicio';
import Playlist from './Sistema/Playlist';
import Favoritos from './Sistema/Favoritos';
import Config from './Sistema/Config';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function SistemaNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#343434'
                }
            }}
        >

            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='home' size={size} color={"#000000"}/>
                        }

                        return <Ionicons name='home-outline' size={size} color={"#B6B6B6"}/>
                    }
                }}
            />

            <Tab.Screen
                name='Playlist'
                component={Playlist}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='play' size={size} color={"#000000"}/>
                        }

                        return <Ionicons name='play-outline' size={size} color={"#B6B6B6"}/>
                    }
                }}
            />

            <Tab.Screen
                name='Favoritos'
                component={Favoritos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='star' size={size} color={"#000000"}/>
                        }

                        return <Ionicons name='star-outline' size={size} color={"#B6B6B6"}/>
                    }
                }}
            />

            <Tab.Screen
                name='Configuração'
                component={Config}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='cog' size={size} color={"#000000"}/>
                        }

                        return <Ionicons name='cog-outline' size={size} color={"#B6B6B6"}/>
                    }
                }}
            />
        </Tab.Navigator>

    )
}

export default SistemaNavigator;