import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Inicio} from '../Sistema/Inicio';
import {Playlist} from '../Sistema/Playlist';
import {Favoritos} from '../Sistema/Favoritos';
import {Config} from '../Sistema/Config';

const Drawer = createDrawerNavigator();

function SistemaNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Inicio} />
            <Drawer.Screen name="Playlist" component={Playlist} />
            <Drawer.Screen name="Favoritos" component={Favoritos} />
            <Drawer.Screen name="Config" component={Config} />
        </Drawer.Navigator>
    );
}

export default SistemaNavigator;