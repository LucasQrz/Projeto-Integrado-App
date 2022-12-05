import React, { useContext } from "react";
import { Button } from 'react-native-paper'
import { ImageBackground, Image, StyleSheet, View } from "react-native";

const App = ({ navigation }) => {
  return(
  <View style={styles.container}>
    <ImageBackground source={require('../Assets/fundoInicial.jpg')} resizeMode="cover" style={styles.image}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../Assets/logo.png')} />
        </View>
    <View style={{ alignItems: 'center'}}> 
        <Button
            style={styles.botao}
            mode='contained'
            textColor='#000000'
            buttonColor='#904B9C'
            onPress={() => navigation.navigate('TelaLogin')}>
                 Acessar
        </Button>
        <Button
            style={styles.botao}
            mode='contained'
            textColor='#000000'
            buttonColor='#904B9C'
            onPress={() => navigation.navigate('TelaCadastro')}>
                Cadastrar
        </Button>
    </View>
    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  botao: {
    marginTop: 20,
    width: 150,
  }
});

export default App;
