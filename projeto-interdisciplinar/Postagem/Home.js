import React, { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";

export default function Calendario() {
  const navigation = useNavigation();
   const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
            <FontAwesome name="cog" size={30} color="#7b503e" style={{ position: 'absolute', left: 10 }} />
          </TouchableOpacity>
          <FontAwesome name="user-circle" size={30} color="#7b503e" style={{ marginHorizontal: 'auto' }} />
        </View>

          <View style={styles.divBox01}>
            <Text style={styles.text}>
              Seja bem vindo de volta, veja quantas pessoas você já ajudou!
            </Text>

            <Image
              source={require('../assets/hands.png')}
              style={{ width: 60, height: 60, marginRight: 25, marginLeft: 10 }}
            />
          </View>

          <View style={styles.divTittle01}>
            <Text style={styles.titulo}>Deseja fazer uma doação?</Text>
          </View>
          
          <View style={styles.divBox02}>
            <Image
              source={require('../assets/plus.png')}
              style={{ width: 30, height: 30 }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Home2')}
              style={styles.button}>
              <Text style={styles.text2}>
                Postar item
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divBox02}>
            <Image
              source={require('../assets/eye.png')}
              style={{ width: 35, height: 29 }}
            />
            <TouchableOpacity  onPress={() => navigation.navigate('Postados')} style={styles.button}>
              <Text style={styles.text2}>
               Ver itens postados
              </Text>
            </TouchableOpacity>
          </View>

      <Modal
        visible={settingsModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Configurações</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil2')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Scroll')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Mudar Para Receber doação</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FaleConosco2')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fale Conosco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setSettingsModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  header: {
    width: '99%',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    marginBottom: 15,
  },

  divBox01: {
    width: '100%',
    height: 120,
    backgroundColor: '#ffe8c8',
    paddingLeft: 0,
    paddingTop: 35,
   
    flexDirection: 'row',
  },

  text: {
    width: '80%',
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  divTittle01: {
    paddingTop: 20,
    marginLeft: 40,
    marginRight: 100,
    marginBottom: 20,
  },

  divBox02: {
    width: '85%',
    height: 80,
    backgroundColor: '#ffe8c8',
    paddingLeft: 30,
    paddingTop: 25,
    paddingBottom: 30,
    marginLeft: 25,
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  button: {
    paddingLeft: 17,
    paddingTop: 6,
    fontSize: 15,
    fontFamily: 'arial',
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
 modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7b503e",
  },
  modalButton: {
    backgroundColor: "#ffe0b4",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  modalButtonText: {
    color: "#7b503e",
    fontSize: 16,
  },
  modalCloseButton: {
    backgroundColor: "#7b503e",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "#FFF",
    fontSize: 16,
  },

});
