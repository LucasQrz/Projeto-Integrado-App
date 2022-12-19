import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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

    <View style={{flex: 1, paddingTop: 40, backgroundColor: '#000000'}}>

      <Image style={{height: 250}}
        resizeMode='contain'
        source={{
          uri: `https://image.tmdb.org/t/p/w200/${filme.poster_path}`,
        }}>
      </Image>

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

            <TouchableOpacity onPress={() => addFilmeToFavoritos(filme)}>
              <View style={{alignItems: 'center', paddingRight: 25}}>
                <Ionicons name='add-circle-outline' size={35} color="#954DFF"/>
                <Text style={{color: '#954DFF', fontSize: 12}}>Minha lista</Text>
              </View>
            </TouchableOpacity>
            
            <View style={{alignItems: 'center', paddingRight: 25}}>
              <Ionicons name='star-half-outline' size={25} color='#fff'/>
              <Text style={{color: '#fff'}}>{filme.vote_average}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.sinopse}>Sinopse: {'\n'}{filme.overview}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  sinopse:{
    color: '#fff',
    fontSize: 16,
    paddingRight: 5,
    paddingLeft:5,
    marginTop: '5%'

  },
  title:{
    color: '#fff',
    fontSize: 20,
    marginTop: '5%',
    fontSize: 20
  },

})