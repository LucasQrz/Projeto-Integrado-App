import React from "react";
import {View, StyleSheet  } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch }
from 'react-native-paper'

export function EditDrawer(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={[styles.userInfoSection, {flexDirection: 'row'}]}>
                        <View style={{
                            marginTop: 15,
                        }}>
                            <Avatar.Image source={require('../Assets/icon.png')}/>
                        </View>
                        <View style={{marginLeft: 9, marginTop: 15}}>
                            <Title style={styles.title}>Lusca</Title>
                            <Caption style={styles.capition}>@lusca</Caption>
                        </View>
                    </View>
                    <View style={[styles.row, styles.userInfoSection]}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.capition]}>80</Paragraph>
                            <Caption style={styles.capition}>Seguindo</Caption>
                        </View>
                        <View style={[styles.section, {marginLeft: 15}]}>
                            <Paragraph style={[styles.paragraph, styles.capition]}>20</Paragraph>
                            <Caption style={styles.capition}>Seguidores</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={{flex: 1, marginTop: 15}}>
                        <DrawerItem label="Início" onPress={() => {props.navigation.navigate('Inicio')}}/>
                        <DrawerItem label="Playlist" onPress={() => {props.navigation.navigate('Playlist')}}/>
                        <DrawerItem label="Favoritos" onPress={() => {props.navigation.navigate('Favoritos')}}/>
                        <DrawerItem label="Configurações" onPress={() => {props.navigation.navigate('Configurações')}}/>
                    </Drawer.Section>
                    <Drawer.Section title="Preferências">
                        <TouchableRipple>
                            <View style={styles.preferences}>
                                <Text>Modo escuro</Text>
                                <Switch />
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item label="Sair" onPress={() => {props.navigation.navigate('TelaLogin')}} />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({

});