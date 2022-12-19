import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
<<<<<<< HEAD
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
=======
>>>>>>> cabc1ce73a3da235a7a640dd2c4597e8ce6f5ef4

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detalhes({ navigation,route }) {
  const id = route?.params?.id;

  const {addFilmeToFavoritos, filmesFavoritos} = route.params;
 
  const [filme, setFilme] = useState({});
  const [favorito, setFavorito] = useState(false);


  const getFilmes = async (filmesId) => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/' + filmesId + '?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR' 
      );
      const json = await resposta.json();
      setFilme(json);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getFilmes(id);
    const favoritoNew = filmesFavoritos?.some(f => f.id == filme.id);
    setFavorito(favoritoNew);


  }, [id],[filmesFavoritos]);

  return (
<<<<<<< HEAD
    <ScrollView style={{flex: 1, paddingTop: 40, backgroundColor: '#000000'}}>
=======
    <View style={{flex: 1, paddingTop: 40, backgroundColor: '#000000'}}>
      <Ionicons style={{fontSize: 22, color: '#fff', padding: 5}} name='bookmark-outline' size={25} onPress={() => navigation.navigate('Playlist',{filmes: filmesFavoritos, addFilmeToFavoritos, filmesFavoritos})}/>

>>>>>>> cabc1ce73a3da235a7a640dd2c4597e8ce6f5ef4
      <Image style={{height: 250}}
        resizeMode='contain'
        source={{
          uri: `https://image.tmdb.org/t/p/w200/${filme.poster_path}`,
        }}>
      </Image>

<<<<<<< HEAD
      <IconButton style={{fontSize: 22, color: '#fff', padding: 5}} icon='react-native-gesture-handler' onPress={() => navigation.navigate('Playlist',{filmes: filmesFavoritos, addFilmeToFavoritos, filmesFavoritos})}></IconButton>
=======
>>>>>>> cabc1ce73a3da235a7a640dd2c4597e8ce6f5ef4
      {id ? (

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.title}>{filme.title}</Text>
          </View>

          <View style={{flexDirection: 'row', padding: 10, marginTop: 8, justifyContent: 'center'}}>

            <View style={{alignItems: 'center', paddingRight: 25}}>
              <Ionicons name='calendar-outline' size={25} color='#fff'/>
              <Text style={{color: '#fff'}}>{filme.release_date}</Text>
            </View>
            
            <View style={{alignItems: 'center', paddingRight: 25}}>
              <Ionicons name='star-half-outline' size={25} color='#fff'/>
              <Text style={{color: '#fff'}}>{filme.vote_average}</Text>
            </View>

            <View style={{alignItems: 'center', paddingRight: 25}}>
              <Ionicons name='add-circle-outline' size={25} color="#fff"
                onPress={() => addFilmeToFavoritos(filme)}/>
              <Text style={{color: '#fff'}}>Minha lista</Text>
            </View>

          </View>

          

          <View>
            <Text style={styles.text}>Sinopse: {'\n'}{filme.overview}</Text>
          </View>

          {
            favorito && <Text>Sou favorito!</Text>
          }

        </View>

      ) : (
        <View>
          <Text>Cadê o id?</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
<<<<<<< HEAD
    fontSize: 18,
    paddingRight: 5,
    paddingLeft:5,
    marginTop: '5%'

  }
=======
    fontSize: 20,
    paddingLeft: 5,
    marginTop: '5%',
  },
  title:{
    color: '#fff',
    fontSize: 20,
    marginTop: '5%',
    fontSize: 20
  },
>>>>>>> cabc1ce73a3da235a7a640dd2c4597e8ce6f5ef4
})