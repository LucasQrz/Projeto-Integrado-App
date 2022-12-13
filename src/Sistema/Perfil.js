import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Perfil = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{alignItems: 'center', padding: 30}}>

        <Image source={require('../Assets/icon.png')} style={styles.image}/>
        <View style={styles.icon}>
        <Ionicons name='camera-outline' size={35} color='#954DFF' />
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60}}>
          <Ionicons name='person' size={25} color='#954DFF' />
          <Text style={{color: '#FCFCFC', fontSize: 25, paddingLeft: 5}}>Usuário</Text> 
        </View>

        <View style={{paddingLeft: 65, width: '90%'}}>
          <TextInput
            placeholder='Lucas'
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60}}>
          <Ionicons name='star' size={25} color='#954DFF' />
          <Text style={{color: '#FCFCFC', fontSize: 25, paddingLeft: 5}}>Gêneros favoritos</Text> 
        </View>

        <View style={{paddingLeft: 65, width: '90%'}}>
          <TextInput
            placeholder='Terror, Suspense, Ação...'
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 60}}>
          <Ionicons name='film' size={25} color='#954DFF' />
          <Text style={{color: '#FCFCFC', fontSize: 25, paddingLeft: 5}}>Filme favorito</Text> 
        </View>

        <View style={{paddingLeft: 65, width: '90%'}}>
          <TextInput
            placeholder='It: A coisa'
            style={styles.input}
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#954DFF',
    height: 40,
    paddingLeft: 10,
    borderRadius: 10
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },

  icon: {
    position: 'absolute',
    backgroundColor: '#000000',
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  }
})

export default Perfil