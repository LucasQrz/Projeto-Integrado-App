import { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';

export default function ListaFilmes({ navigation }) {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=5'
      );
      const json = await resposta.json();
      setFilmes(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <View style={{backgroundColor: '#000000'}}>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          
          <TouchableOpacity
          onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 250, margin: 10}}
              resizeMode='cover'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}