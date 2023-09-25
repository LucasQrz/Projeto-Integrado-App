<View style={styles.senha}>
{/* Aqui vou ter que trabalhar para comparar com a senha se não estiver igual a senha nao vai poder ir. */}
<TextInput
  secureTextEntry={hidePass2}
  
  onChangeText={(texto) => setInput2(texto)}
  backgroundColor="#000000"
  underlineColor="#B6B6B6"
  activeUnderlineColor="#B6B6B6"
  textColor="#fff"
  style={styles.input}
  label="Confirmar senha"
/>
{/* Aqui e o botão que chama a função para mudar o valor do olho e esconder o texto */}
<TouchableOpacity style={styles.icon} onPress={() => setHidepass2(!hidePass2)}>
  {hidePass2 ?
    <Ionicons name="eye" size={25} color='gray' />
    :
    <Ionicons name="eye-off" size={25} color='gray' />
  }
</TouchableOpacity>
</View>