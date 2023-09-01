import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Itens from './Itens';

export default function Main() {
  const navigation = useNavigation();

  // Estado para armazenar o valor da pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // Estado para armazenar os alertas favoritos
  const [favoriteAlerts, setFavoriteAlerts] = useState([]);

  // Estado para armazenar o produto selecionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função para atualizar o estado da pesquisa
  const onChangeSearch = (query) => setSearchQuery(query);

  const addFavoriteAlert = (product) => {
    // Adiciona um alerta favorito ao estado
    setFavoriteAlerts([...favoriteAlerts, product]);
  };

  const navigateToProductDetails = (product) => {
    // Define o produto selecionado no estado
    setSelectedProduct(product);

    // Navega para a tela de detalhes do produto
    navigation.navigate('Detalhes', { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Searchbar
          style={styles.search}
          placeholder="Pesquisar produtos"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.scene}>
        <Itens
          onFavoritePress={addFavoriteAlert}
          onProductPress={navigateToProductDetails}
          searchQuery={searchQuery}
        />
      </ScrollView>
    </View>
  );
}

// Define os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#903848',
  },
  search: {
    height: '60%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginLeft: '5%',
    marginRight: '5%',
    paddingEnd: '5%',
    padding: 10,
  },
  scene: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
