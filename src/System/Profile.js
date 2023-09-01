import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ alignItems: 'center', padding: 30 }}>
        <Image source={require('../Assets/promonet-logo.png')} style={styles.image} />

        <View style={styles.icon}>
          <Ionicons name="camera-outline" size={35} color="#fff" />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60 }}>
          <Ionicons name="person" size={25} color="#903848" />
          <Text style={{ color: '#903848', fontSize: 25, paddingLeft: 10 }}>Usuário</Text>
        </View>

        <View style={{ paddingLeft: 65, width: '90%' }}>
          <TextInput
            placeholder="Lucas"
            selectionColor="#fff"
            placeholderTextColor="#B6B6B6"
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60 }}>
          <Ionicons name="mail" size={25} color="#903848" />
          <Text style={{ color: '#903848', fontSize: 25, paddingLeft: 10 }}>Email</Text>
        </View>

        <View style={{ paddingLeft: 65, width: '90%' }}>
          <TextInput
            placeholder="Terror, Suspense, Ação..."
            selectionColor="#fff"
            placeholderTextColor="#B6B6B6"
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60 }}>
          <Ionicons name="film" size={25} color="#903848" />
          <Text style={{ color: '#903848', fontSize: 25, paddingLeft: 10 }}>Senha</Text>
        </View>

        <View style={{ paddingLeft: 65, width: '90%' }}>
          <TextInput
            placeholder="It: A coisa"
            selectionColor="#fff"
            placeholderTextColor="#B6B6B6"
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#903848',
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
    color: '#fff',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },

  icon: {
    position: 'absolute',
    backgroundColor: '#903848',
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
});

export default Profile;
