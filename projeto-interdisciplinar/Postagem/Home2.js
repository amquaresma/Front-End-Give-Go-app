import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Calendario2 ({navigation}) {
  return (
    <SafeAreaView style={styles.container}>


    <View style={styles.divImage01}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton} >
         <Icon name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>
        <Text style={styles.user}>Postagem</Text>
    </View>

    <View>
      <Text style={styles.divText01}>
        Adicione uma imagem do item
      </Text>
    </View>

    <TouchableOpacity style={styles.divBox01} onPress={() => alert("Nenhum arquivo de mídia do seu dispositivo é compatível com os requisitos de anexo")}>
        <Image
          source={require('../assets/clips.png')}
          style={{ width: 32, height: 32,  marginHorizontal: 'auto'}}
        />
    </TouchableOpacity>

    <View>
      <Text style={styles.divText02}>
        Indique o endereço da retirada do item
      </Text>
    </View>

      <TouchableOpacity style={styles.divBox02} onPress={() => alert("Geolocalização indisponível no momento")}>
        <Image
          source={require('../assets/pin.png')}
          style={{ width: 21, height: 31}}
        />
        <Text style={styles.button2}>
          Cadastrar item
        </Text>
    </TouchableOpacity>

    <View>
      <Text style={styles.divText02}>
        Indique as datas e horários disponíveis para a retirada
      </Text>
    </View>

      <View style={styles.divBox03}>
        <TouchableOpacity  onPress={() => alert("Pagina não concluida")}>
          <Text style={styles.button3}>
          Dia(s): Dia, mês e ano
          </Text>
        </TouchableOpacity>
         <TouchableOpacity  onPress={() => alert("Pagina não concluida")}>
          <Text style={styles.button3}>
          Horário: Das 00:00 às 00:00
          </Text>
        </TouchableOpacity>
        
    </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home3")} style={styles.divBox04}>
        <Text style={styles.texto}>
          Próximo passo
        </Text>
        <Image
          source={require('../assets/seta2.png')}
          style={{ width: 30, height: 30, marginTop: 3, marginLeft: 8,}}
       />
      </TouchableOpacity>

    


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'white',
  },    

backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7b503e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divImage01: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    marginLeft: 20,
    paddingTop: 20,
  },

  user: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 5,
  },

  divText01: {
    color: 'black',
    fontSize: 16,
    marginLeft: 12,
  },

  divBox01: {
    marginTop:30,
    marginHorizontal:'auto',
    textAlign: 'center',
    height: 110,
    width: '80%',
    backgroundColor: '#ffe8c8',
    paddingTop: 35,
    paddingBottom: 50,
    borderRadius: 20,
  },

  divText02: {
    color: 'black',
    fontSize: 16,
    marginLeft: 12,
    marginTop: 12,
  },

  divBox02: {
    width: '80%',
    height: 60,
    backgroundColor: '#ffe8c8',
    paddingLeft: 25,
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal:'auto',
    alignItems: 'center'
  },
  
  button2:{
    marginLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 15,
    },

  divBox03: {
    width: '80%',
    backgroundColor: '#ffe8c8',
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal:'auto',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },

  button3: {
    marginLeft: 0,
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 13,
  },

  divBox04: {
    backgroundColor: '#7b503e',
    marginTop: 16,
    marginLeft:180,
    height: 37,
    flexDirection: 'row',
    paddingLeft: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  texto: {
    color: 'white',
    paddingTop: 10,
    fontWeight: 'bold',
    fontFamily: 'arial',
    
  }

})