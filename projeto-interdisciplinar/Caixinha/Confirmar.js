import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Caixinha({ navigation }) {
  const [reserved, setReserved] = useState(false);
  const [retrieved, setRetrieved] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Scroll")}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Caixinha</Text>
      </View>

      <Text style={styles.subtitle}>
        Lembre-se de verificar o endereço do doador e os horários disponíveis para a retirada.
      </Text>

      <Text style={styles.sectionTitle}>Para confirmar</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/Blusa.png')}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.itemTitle}>Blusas de frio - P e G</Text>
          <Text style={styles.itemInfo}>Rua das Margaridas Jd. Monte Alegre</Text>
          <Text style={styles.itemInfo}>Mais informações:</Text>
          <Text style={styles.itemInfo}>Casa de Nº 60</Text>
          <Text style={styles.itemInfo}>Responsável - Maria Angela</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setReserved(false)}
            >
              <Text style={styles.buttonText}>Cancelar reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={() => navigation.navigate("Confirmar2")}
            >
              <Text style={styles.buttonText}>Confirmar reserva</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Para retirar</Text>
      <View style={[styles.card, { marginBottom: 50 }]}>
        <Image
          source={require('../assets/Calca.png')}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.itemTitle}>Calças jeans Tam 40</Text>
          <Text style={styles.itemInfo}>Rua José Antônio Jd. Paraíso</Text>
          <Text style={styles.itemInfo}>Mais informações:</Text>
          <Text style={styles.itemInfo}>Casa de Nº 45</Text>
          <Text style={styles.itemInfo}>Responsável - Elizângela</Text>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={() => setRetrieved(true)}
          >
            <Text style={styles.buttonText}>Já retirei o item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8c8',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#7b503e', 
    borderRadius: 20,
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
    fontSize: 14,
    color: '#6B4D3F',
    marginBottom: 20,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4D3F',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B4D3F',
    marginBottom: 5,
  },
  itemInfo: {
    fontSize: 14,
    color: '#6B4D3F',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#dd2828',
  },
  confirmButton: {
    backgroundColor: '#00bf15',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
