import React from 'react';
import {
  KeyboardAvoidingView, View,
  Image, Text, TextInput,
  StyleSheet, TouchableOpacity
} from 'react-native';

export default function Login({navigation}){
  return(
    <KeyboardAvoidingView style={styles.background}>      <View style={styles.containerLogo}>
          <Image
          style={styles.logo}
          source={require('../assets/giveandgo.png')}
          />
      </View>
      
      <View style={styles.containerLogin}>
        <Image style={styles.imagemLogin} source={require('../assets/imagemLogin.png')}
        />
      </View>
      
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autocorrect={false}
        onChangeText={ () => {}}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha (min 8 caracteres)"
        autocorrect={false}
        onChangeText={ () => {}}
        />
        
        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.submitTexto}> Entrar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.registerText}>   Não tem uma conta? </Text>
          <Text style={styles.registerTexto}>Clique aqui e crie agora! </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }
  
  const styles = StyleSheet.create({
    background:{
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#fff',
    },
    containerLogo:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
    },
    logo:{
      width: 180,
      height: 225,

    },
    containerLogin:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30,
    },
    imagemLogin:{
      width: 160,
      height: 32, 
      marginBottom: 15,
    },
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 30,
    },
    input:{
      backgroundColor: '#ffe8c8',
      width: '80%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 7,
    },
    btnSubmit:{
      backgroundColor: '#7b503e',
      width: '80%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },
    submitTexto:{
      color: "#FFF",
      fontWeight: 'bold',
    },
    registerText:{
      color:'#000',
      marginTop: 20,
  },
  })