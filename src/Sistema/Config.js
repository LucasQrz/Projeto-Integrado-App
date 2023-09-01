import { View, Text } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Config = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={{ flex: 9 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}
        >
          <Ionicons name="options-outline" size={28} color="#fff" />

          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Geral</Text>
            <Text style={{ color: '#B6B6B6', fontSize: 14 }}>
              Idioma do aplicativo, notificações
            </Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}
        >
          <Ionicons name="repeat-outline" size={28} color="#fff" />

          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Monitoramento</Text>
            <Text style={{ color: '#B6B6B6', fontSize: 14 }}>Sincronização de progresso</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}
        >
          <Ionicons name="refresh-circle-outline" size={28} color="#fff" />

          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Backup e restaurar</Text>
            <Text style={{ color: '#B6B6B6', fontSize: 14 }}>Manual e automático</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}
        >
          <Ionicons name="shield-checkmark-outline" size={28} color="#fff" />

          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Segurança</Text>
            <Text style={{ color: '#B6B6B6', fontSize: 14 }}>Senha, email</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingBottom: 10 }}
        >
          <Ionicons name="alert-circle-outline" size={28} color="#fff" />

          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Sobre</Text>
            <Text style={{ color: '#B6B6B6', fontSize: 14 }}>Space Cine Versão 0.1.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Config;
