import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';

const API_URL = 'https://fakestoreapi.com/products';

export default function Items({ onFavoritePress, onProductPress, searchQuery }) {
  // Estado para controlar o carregamento dos produtos
  const [isLoading, setIsLoading] = useState(true);

  // Estado para armazenar os produtos
  const [products, setProducts] = useState([]);

  // Estado para armazenar os favoritos
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Carrega os produtos quando o componente é montado
    fetchProducts();
  }, []);

  // Função assíncrona para buscar os produtos da API
  const fetchProducts = async () => {
    try {
      // Faz a requisição para a API para obter os produtos
      const response = await fetch(API_URL);
      const data = await response.json();

      // Atualiza o estado dos produtos e indica que o carregamento foi concluído
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Verifica se um item é um favorito
  const isFavorite = (item) => favorites.some((product) => product.id === item.id);

  // Alterna entre adicionar e remover um item dos favoritos
  const toggleFavorite = (item) => {
    if (isFavorite(item)) {
      // Se o item já for um favorito, removê-lo
      setFavorites(favorites.filter((product) => product.id !== item.id));
    } else {
      // Caso contrário, adicioná-lo aos favoritos
      setFavorites([...favorites, item]);
    }
    // Chamar a função de callback para informar que um item foi marcado como favorito
    onFavoritePress(item);
  };

  const renderProduct = ({ item, onProductPress }) => {
    // Define o ícone do coração com base se o item é um favorito ou não *
    const favoriteIcon = isFavorite(item) ? 'heart' : 'heart-outline';

    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null; // Não renderiza o produto se não corresponder à pesquisa
    }

    return (
      <TouchableOpacity onPress={() => onProductPress(item)}>
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={2} style={styles.productTitle}>
              {item.title}
            </Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
          <IconButton
            icon={favoriteIcon}
            color="#e91e63"
            size={20}
            onPress={() => toggleFavorite(item)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  // Se estiver carregando, exibe o indicador de atividade
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#903848" />
      </View>
    );
  }

  // Exibe a lista de produtos
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {products.map((item) => (
          <View key={item.id} style={styles.flexContainer}>
            {renderProduct({ item, onProductPress })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;

// Define os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  contentContainer: {
    padding: 10,
    marginTop: 10,
  },
  flexContainer: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    width: windowWidth - 200,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#903848',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
