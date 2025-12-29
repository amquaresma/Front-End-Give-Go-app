import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ItensPostados({ navigation }) {
  const [itensParaRetirar, setItensParaRetirar] = useState([
    {
      id: 1,
      imagem: 'https://casaeconstrucao.org/wp-content/uploads/2022/05/como-dobrar-calca-jeans-passo-a-passo-para-dobrar-e-organizar-2.jpeg',
      titulo: 'Calças jeans Tam 40',
      endereco: 'Rua José Antônio Jd. Paraíso',
      maisInfo: 'Casa de Nº 45\nResponsável - Elizângela',
    },
  ]);

  const [itensNaoReservados, setItensNaoReservados] = useState([
    {
      id: 2,
      imagem: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418580789/large/kit-3-camisetas-infantis-meninos-personagens-roupas-atacado_172294.JPG',
      titulo: 'Camisetas infantis - Tam 10-12',
      endereco: 'Rua José Antônio Jd. Paraíso',
      maisInfo: 'Casa de Nº 45\nResponsável - Elizângela',
    },
  ]);

  const handleRetirado = (id) => {
    setItensParaRetirar(itensParaRetirar.filter((item) => item.id !== id));
    Alert.alert('Confirmação', 'O item foi marcado como retirado.');
  };

  const handleCancelar = (id) => {
    setItensNaoReservados(itensNaoReservados.filter((item) => item.id !== id));
    Alert.alert('Confirmação', 'O item foi cancelado.');
  };

  const handleEditar = (id) => {
    Alert.alert('Editar', `Editar item com ID: ${id}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Itens postados</Text>
      </View>

      <Text style={styles.subtitle}>Ainda para retirar</Text>
      {itensParaRetirar.length > 0 ? (
        itensParaRetirar.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image source={{ uri: item.imagem }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.titulo}</Text>
                <Text style={styles.itemText}>{item.endereco}</Text>
                <Text style={styles.itemText}>{item.maisInfo}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.greenButton} onPress={() => handleRetirado(item.id)}>
              <MaterialIcons name="check-circle" size={18} color="#fff" />
              <Text style={styles.buttonText}>Já foi retirado</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>Nenhum item para retirar.</Text>
      )}

      <Text style={styles.subtitle}>Ainda não foi reservado</Text>
      {itensNaoReservados.length > 0 ? (
        itensNaoReservados.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image source={{ uri: item.imagem }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.titulo}</Text>
                <Text style={styles.itemText}>{item.endereco}</Text>
                <Text style={styles.itemText}>{item.maisInfo}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.redButton} onPress={() => handleCancelar(item.id)}>
                <MaterialIcons name="cancel" size={18} color="#fff" />
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.outlineButton} onPress={() => handleEditar(item.id)}>
                <MaterialIcons name="edit" size={18} color="#555" />
                <Text style={styles.outlineButtonText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>Você não tem nenhum item que ainda precisa ser reservado.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe8c8',
    paddingHorizontal: 16,
    minHeight: height,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7b503e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7b503e',
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  itemText: {
    fontSize: 12,
    color: '#555',
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bf15',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginTop: 12,
  },
  redButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dd2828',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginTop: 8,
    flex: 1,
    marginRight: 8,
  },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginTop: 8,
    flex: 1,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 6,
  },
  outlineButtonText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 6,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 12,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 16,
  },
});
