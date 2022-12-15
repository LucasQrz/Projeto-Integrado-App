import React, { useState} from 'react';
import { Text, Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'
import { Ionicons  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../DefaultButton/DefaultButton";

export default function Login(){
  const navigation = useNavigation();
  const [inputs, setInputs] = useState('');
  const [ocultarSenha, setOcultarsenha] = useState(true);

  const NavigationLogin = () => {
    navigation.navigate("SistemaNavigator");
  };

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('../Assets/fundoLogin.jpg')} 
        resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../Assets/logo.png')} />
        </View>

        <View style={styles.back}>
          <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              style={styles.email}
              textColor="#fff"
              label="Email"
            />
            
          <View style={styles.campoSenha}>
            <TextInput
              backgroundColor="#000000"
              secureTextEntry={ocultarSenha}
              value={inputs}
              onChangeText={ (texto) => setInputs(texto)}
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              style={styles.inputs}
              label="Senha"
            />

            <TouchableOpacity style={styles.icone} onPress={ () => setOcultarsenha(!ocultarSenha)}>
              {ocultarSenha ? 
                <Ionicons name="eye" size={25} color='gray'/>
                :
                <Ionicons name="eye-off" size={25} color='gray'/>
              }
            </TouchableOpacity>    
          </View>

          <View style={{alignSelf: 'flex-end', paddingRight: 10}}>
            <Text style={styles.texto}>Esqueceu a senha?</Text>
          </View>
        </View>
          
        <View style={{alignItems: 'center'}}>
          <DefaultButton
            buttonText={'Acessar'}
            backgroundColor={'#26034D'}
            marginTop={14}
            click={NavigationLogin}
            width={200}
            height={50}
          />
        </View>
        
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  campoSenha:{
    flexDirection:"row",
    width: '100%',
    backgroundColor:'#000000',
    borderRadius: 5,
    height:70,
    alignItems: 'center',
  },

  inputs: {
    width: '85%',
    height:50,
  },

  icone:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  back: {
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },

  texto: {
    fontSize: 15,
    color: '#904B9C',
    fontSize: 18
  },
});