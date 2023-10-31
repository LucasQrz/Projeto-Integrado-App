import { ImageBackground, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../DefaultButton/DefaultButton";

export default function App(){
  const navigation = useNavigation();

  const NavigationLogin = () => {
    navigation.navigate("TelaLogin");
  };

  const NavigationCadastro = () => {
    navigation.navigate("TelaCadastro");
  };

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('../Assets/fundoTelaLogin.png')} 
        resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>

          <View style={{alignItems: 'center',}}>
            <Image source={require('../Assets/logoSpaceCine.png')} />
          </View>

        <View style={{ alignItems: 'center'}}> 
          <DefaultButton
            buttonText={'Acessar'}
            backgroundColor={'#000000'}
            click={NavigationLogin}
            width={200}
            height={50}
          />

          <DefaultButton
            marginTop={14}
            backgroundColor={'#000000'}
            buttonText={'Cadastrar'}
            click={NavigationCadastro}
            width={200}
            height={50}
          />
        </View>
        
      </ImageBackground>
    </View>
  )
};