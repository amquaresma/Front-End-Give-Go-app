import React from 'react';
import {
  KeyboardAvoidingView, View,
  Image, Text, TextInput,
  StyleSheet, TouchableOpacity
} from 'react-native';

export default function Cadastro({navigation}){
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
          <Image
          style={styles.logo}
          source={require('../assets/giveandgo.png')}
          />
      </View>

      <View style={styles.containerConta}>
        <Image style={styles.imagemConta} source={require('../assets/imagemConta.png')}
        />
      </View>
      
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        autocorrect={false}
        onChangeText={ () => {}}
        />
        <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        autocorrect={false}
        onChangeText={ () => {}}
        />

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
          <Text style={styles.submitTexto}> Criar conta </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.registerText}> Já possui uma conta?</Text>
          <Text style={styles.registerTexto}>Clique aqui faça login!</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
  }
  
  const styles = StyleSheet.create({
    background:{
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#fff'
    },
    containerLogo:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width: 200,
      height: 250,
      marginTop: 50,
    },
    containerConta:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30
    },
    imagemConta:{
      width: 270,
      height: 30, 
      marginBottom: 30
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
      padding: 7
    },
    btnSubmit:{
      backgroundColor: '#7b503e',
      width: '80%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
    submitTexto:{
      color: "#FFF",
      fontWeight: 'bold'
    },
    btnLogin:{
      marginTop: 20,
      justifyContent: 'center',
    }
  })
  
  