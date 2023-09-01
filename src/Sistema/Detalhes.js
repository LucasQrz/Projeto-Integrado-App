import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, IconButton, Avatar } from 'react-native-paper';

export default function ProductDetails({ route }) {
  // Extrai o objeto product dos parâmetros de rota
  const { product } = route.params;

  // Estado para armazenar o valor do comentário *
  const [comment, setComment] = useState('');

  const handleCommentChange = (text) => {
    // Atualiza o estado do comentário com o texto digitado
    setComment(text);
  };

  const submitComment = () => {
    // Adiciona lógica para enviar o comentário para algum lugar *
    console.log('Comentário:', comment);

    // Limpa o estado do comentário após o envio *
    setComment('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>{product.title}</Text>
          <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain" />
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          <Button
            mode="contained"
            // onPress={() => console.log('')}
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
          >
            Pegar promoção
          </Button>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.commentContainer}>
        <Avatar.Text size={50} label="DM" style={styles.commentAvatar} />
        <TextInput
          style={styles.commentInput}
          placeholder="Deixe seu comentário!"
          value={comment}
          onChangeText={handleCommentChange}
        />
        <IconButton
          icon="send"
          onPress={submitComment}
          style={styles.commentButton}
          iconColor="#fff"
          size={30}
        />
      </View>
    </View>
  );
}

// Define os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  containerHeader: {
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  price: {
    color: '#903848',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#903848',
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 14,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#903848',
  },
  commentAvatar: {
    backgroundColor: '#fff',
    margin: 7,
    marginRight: 15,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
  },
  commentButton: {
    marginLeft: 8,
    backgroundColor: '#903848',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
