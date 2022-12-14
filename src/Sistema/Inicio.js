import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { List } from 'react-native-paper';


export default function Inicio({ navigation }) {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=1'
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
    <View>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          
          <List.Item
            imagem={item.poster_path}
            title={item.title}
            description={item.vote_average}

            imagemStyle={styles.poster_path}
            titleStyle={styles.title}
            descriptionStyle={styles.vote_average}
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}
          />
          
        )}
     
      />
    </View>
  );
}

const styles = StyleSheet.create({
title: {
  fontWeight: 'bold',
  color: 'rgb(117, 117, 117)',
  fontSize: 12,
}
    
});