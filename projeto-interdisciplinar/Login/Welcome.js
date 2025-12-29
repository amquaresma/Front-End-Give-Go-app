import React from "react";

import {
  KeyboardAvoidingView, View,
  Image, Text, TextInput,
  StyleSheet, TouchableOpacity
} from 'react-native';

export default function Welcome({navigation}){
  return(
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerWelcome}>
        <Image style={styles.imagemWelcome} source={require('../assets/bemVindo.png')}
        />
      </View>

      <View style={styles.containerLogo}>
          <Image
          style={styles.logo}
          source={require('../assets/giveandgo.png')}
          />
      </View>

      <View style={styles.containerTexto}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#474747'}}>Selecione uma opção:</Text>
      </View>

        <View style={styles.containerBtn}>

        <TouchableOpacity onPress={() => navigation.navigate('Scroll')} style={styles.btnEscolher}>
        <Image style={styles.receber} source={require('../assets/receber.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnEscolher}>
        <Image style={styles.doar}source={require('../assets/doar.PNG')}/>
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
    containerWelcome:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagemWelcome:{
      marginTop: 60,
      width: 180,
      height: 90, 
      marginBottom:0
    },
    logo:{
      width: 180,
      height: 225,
    },
    containerTexto:{
      fontWeight: 'bold',
      justifyContent: 'center',
      marginBottom: 20,
    },
    containerBtn:{
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 20,
    },
    btnEscolher:{
      backgroundColor: '#ffe8c8',
      borderRadius: 10,
      padding: 7,
    },
    receber:{
      width: 136,
      height: 176
    },
    doar:{
      width: 136,
      height: 176
    }
})

