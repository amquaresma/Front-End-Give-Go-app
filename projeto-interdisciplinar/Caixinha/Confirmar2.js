import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Notifications from 'expo-notifications';  // Importar as notificações

const ItemPostadoSucesso = ({ navigation }) => {

  // Solicitar permissões e agendar a notificação
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    }

    requestPermissions();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Parabéns!",
        body: "O item foi confirmado com sucesso! Alguém em breve irá retirá-lo.",
      },
      trigger: null, // Notificação será disparada imediatamente
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Scroll")}>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Image
          source={require('../assets/Check.png')}
          style={{ width: 60, height: 60, marginLeft: 10, marginTop: 30, marginBottom: 20 }}
        />

        <Text style={styles.title}>Item confirmado com sucesso!</Text>
        <Text style={styles.description}>
          O item reservado poderá ser retirado no local indicado em algum momento
          dentro das datas e horários especificados pelo doador.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/Blusa.png')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.text}>Rua das Margaridas Jd. Monte Alegre</Text>
          <Text style={styles.text}>Casa de Nº 60</Text>

          <Text style={styles.label}>Responsável pela doação:</Text>
          <Text style={styles.text}>Maria Angela</Text>
          <Text style={styles.text}>Número para contato: (11) 99123-4567</Text>

          <Text style={styles.label}>Datas e horários disponíveis para a retirada:</Text>
          <Text style={styles.text}>Dia(s): Dia, mês e ano</Text>
          <Text style={styles.text}>Horário: Das 00:00 às 00:00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8c8',
    paddingHorizontal: 20
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 3,
    backgroundColor: '#7b503e',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  info: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default ItemPostadoSucesso;

