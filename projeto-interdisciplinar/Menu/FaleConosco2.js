import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Ionicons } from '@expo/vector-icons';

export default function FaleConosco({ navigation }) {
  const [buttonPressed, setButtonPressed] = useState(false);

  // Solicitar permissões de notificação ao carregar o componente
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        Alert.alert("Permissão negada", "Permita notificações para feedback.");
      }
    };
    requestPermissions();
  }, []);

  const handleSend = async () => {
    setButtonPressed(true);

    await sendNotification();

    Alert.alert("Mensagem Enviada", "Sua mensagem foi enviada com sucesso!");
  };

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Mensagem Enviada ✅",
        body: "Obrigado por entrar em contato conosco! Responderemos em breve.",
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>Fale Conosco</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#A09A9A"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#A09A9A"
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escreva sua mensagem"
        placeholderTextColor="#A09A9A"
        multiline
        numberOfLines={5}
      />

      <TouchableOpacity
        style={[styles.button, buttonPressed && { backgroundColor: "#00bf15" }]}
        onPress={handleSend}
        disabled={buttonPressed}
      >
        <Text style={styles.buttonText}>
          {buttonPressed ? "Enviado" : "Enviar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#7b503e',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7b503e",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ffe0b4",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
    color: "#6B4F4F",
    elevation: 2,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#7b503e",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});


