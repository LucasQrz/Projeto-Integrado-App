import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

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
    <View style={{flex: 1, paddingTop: 40, backgroundColor: '#000000'}}>
      {id ? (
        <View style={{alignItems: 'center'}}>
      
          <Text style={styles.text}>Nome: {filme.title}</Text>
          <Text style={styles.text}>Avaliação: {filme.vote_average}</Text>
          
          <View>
            <Text style={styles.text}>Sinopse: {filme.overview}</Text>
            <Text style={styles.text}>Lançamento: {filme.release_date}</Text>
          </View>

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
  text:{
    color: '#fff',

  }
})