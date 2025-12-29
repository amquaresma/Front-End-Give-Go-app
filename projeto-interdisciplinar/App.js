import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from "./Rotas";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Calendario({ navigation }) {
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
        title: "Bem-vindo!",
        body: "Obrigado por usar nosso aplicativo! Uma doação muda vidas!",
      },
      trigger: null, 
    });
  }, []);

  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});