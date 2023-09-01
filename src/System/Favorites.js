import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Favorites({ favoriteAlerts, removeFavoriteAlert }) {
  // Função para renderizar cada produto favorito na lista
  const renderAlert = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProductDetails(item)}>
      <View style={styles.alertContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.alertTitle}>{item.title}</Text>
          <Text style={styles.alertPrice}>R$ {item.price}</Text>
          <IconButton
            icon="close"
            color="#000"
            size={20}
            onPress={() => removeFavoriteAlert(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  // Função para navegar para os detalhes do produto
  const navigateToProductDetails = (product) => {
    navigation.navigate('Details', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteAlerts}
        renderItem={renderAlert}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Não há itens favoritados.</Text>
          </View>
        )}
      />
    </View>
  );
}

// Define os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 10,
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertTitle: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertPrice: {
    fontWeight: 'bold',
    color: '#903848',
    fontSize: 18,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: '50%',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

// import { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
// import { useIsFocused } from '@react-navigation/native';

// import { getFavorites } from '../utils/storage';
// import Itens from '../Sistema/Itens';

// export function Favoritos() {
//   const [receipes, setReceipes] = useState([]);
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     let isActive = true;

//     async function getReceipes() {
//       const result = await getFavorites('@promoapp');
//       if (isActive) {
//         setReceipes(result);
//       }
//     }

//     if (isActive) {
//       getReceipes();
//     }

//     return () => {
//       isActive = false;
//     };
//   }, [isFocused]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Receitas favoritas</Text>

//       {receipes.length === 0 && <Text>Você ainda não tem nenhuma receita salva.</Text>}

//       <FlatList
//         showsVerticalScrollIndicator={false}
//         style={{ marginTop: 14 }}
//         data={receipes}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => <Itens data={item} />}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F3F9FF',
//     paddingStart: 14,
//     paddingEnd: 14,
//     paddingTop: 36,
//   },
//   title: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// });
