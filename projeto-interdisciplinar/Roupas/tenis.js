import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default function ItemDetailsScreen({navigation}) {
  const [isAddedToBox, setIsAddedToBox] = useState(false);

  const handleAddToBox = () => {
    if (!isAddedToBox) {
      showToast('Item adicionado à caixinha.');
    } else {
      showToast('Item removido da caixinha.');
    }
    setIsAddedToBox(!isAddedToBox);
  };

  const showToast = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Notificação', message);
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Scroll")}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

    
     <ScrollView>
        <Image
          source={{ uri: 'https://images.freeimages.com/images/large-previews/b78/old-all-star-converse-1550983.jpg' }} 
          style={styles.itemImage}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.itemDescriptionTitle}>Descrição do Item:</Text>
          <Text style={styles.itemDescription}>Tênis - Tamanho 39</Text>

          <Text style={styles.itemDescriptionTitle}>Endereço:</Text>
          <Text style={styles.itemDescription}>
            Rua Palmares Jd. Alegria{'\n'}Casa de Nº 718. - Taboão da Serra - SP
          </Text>

          <Text style={styles.itemDescriptionTitle}>Responsável pela doação:</Text>
          <Text style={styles.itemDescription}>Maria Fernanda</Text>

          <Text style={styles.itemDescriptionTitle}>
            Datas e horários disponíveis para a retirada:
          </Text>
          <Text style={styles.itemDescription}>
            Dias: 12/12/2024, 13/12/2024 e 14/12/2024{'\n'}Horário: Das 18:00 - 22:00
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.addToBoxButton,
          { backgroundColor: isAddedToBox ? '#4CAF50' : '#7b503e' },
        ]}
        onPress={handleAddToBox}
      >
        <FontAwesome name="archive" size={20} color="#FFF" />
        <Text style={styles.addToBoxButtonText}>
          {isAddedToBox ? 'Adicionado' : 'Adicionar à Caixinha'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8c8',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#7b503e',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemDescriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B4F4F',
    marginTop: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6B4F4F',
    marginBottom: 8,
  },
  addToBoxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  addToBoxButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },
});
