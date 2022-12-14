import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';



export default function Detalhes({ route }) {
  const id = route?.params?.id;
  const [filme, setFilme] = useState({});

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
  }, [id]);

  return (
    <View>
      {id ? (
        <View>
      
          <Text>Nome: {filme.title}</Text>
          <Text>Sinopse: {filme.overview}</Text>
          <Text>Avaliação: {filme.vote_average}</Text>
          <Text>Lançamento: {filme.release_date}</Text>
        
        </View>
      ) : (
        <View>
          <Text>Cadê o id?</Text>
        </View>
      )}
    </View>
  );
}
