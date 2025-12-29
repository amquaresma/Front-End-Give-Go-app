import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function Scroll() {
  const navigation = useNavigation();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
          <FontAwesome name="cog" size={30} color="#7b503e" />
        </TouchableOpacity>
        <FontAwesome name="user-circle" size={30} color="#7b503e" style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate('Confirmar')}>  
        <FontAwesome name="archive" size={30} color="#7b503e" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#7b503e" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Do que você precisa hoje?"
          placeholderTextColor="#A09A9A"
        />
        <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
          <FontAwesome name="sliders" size={20} color="#7b503e" style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Adicionados recentemente - Data de postagem</Text>
     <ScrollView>
  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Blusas')} style={styles.item}>
      <Image
        source={require('./assets/Blusa.png')}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Blusas de frio - P e G</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua das Margaritas Jd. Monte Alegre
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Calcas')} style={styles.item}>
      <Image
        source={{
          uri: "https://visitebrasilia.com.br/media/plg_jspeed/cache/images/a20a1a28c62d833b998b311e71f2d969c8b47bc2.webp",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Calças - 36 ao 40</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua José Antônio Jd. Paraíso
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Casaco')} style={styles.item}>
      <Image
        source={{
          uri: "https://photos.enjoei.com.br/casaco-de-feio-infantil-92797553/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMjE1MTYwOC9mNjY3NTJhMTg1NTQyOWY5ODE0ODJhYjUxYjhhODUwMC5qcGc",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Casaco - M</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua Domingos Jd. Recanto
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Tenis')} style={styles.item}>
      <Image
        source={{
          uri: "https://images.freeimages.com/images/large-previews/b78/old-all-star-converse-1550983.jpg",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Tênis - 39</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua Palmares Jd. Alegria
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Roupas')} style={styles.item}>
      <Image
        source={{
          uri: "https://photos.enjoei.com.br/lote-roupas-doacao-70139811/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTU4MTU2OS8xNWViZWMwYWVmNjIzYjRmZjkzZWM4YmUzMmFiNGY0Yy5qcGc",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Roupas infantis - 2 a 4 anos</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua Vitória Jd. Esperança
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Cobertores')} style={styles.item}>
      <Image
        source={{
          uri: "https://www.abordagemnoticias.com/uploads/noticias/2024/20/511177-639240-15052024103400.jpg",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Cobertores</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua Flores Jd. Primavera
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Mochilas')} style={styles.item}>
      <Image
        source={{
          uri: "https://img.freepik.com/fotos-premium/mochilas-usadas-por-todos_153608-53154.jpg",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Mochilas escolares</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Av.Vida Nova, Jd. Maria Rosa
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Sapatos')} style={styles.item}>
      <Image
        source={{
          uri: "https://s2-g1.glbimg.com/BPgfSxMhZFDCmEVtqTK1kb54F8A=/0x0:1043x577/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/T/N/Gq2CMJRMmH2tcbyNKFkw/tenis.jpg",
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>Sapatos femininos - 36</Text>
      <Text style={styles.itemLocation}>
        Taboão da Serra - SP{"\n"}Rua Guilherme Muller. Jd.Maria Rosa
      </Text>
    </TouchableOpacity>
  </View>
</ScrollView>

      <Modal
        visible={filterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Opções de Filtragem</Text>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Categoria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Tamanho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setFilterModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={settingsModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Configurações</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Mudar Para Doador</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FaleConosco')} style={styles.modalButton}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe0b4",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#6B4F4F",
  },
  filterIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#6B4F4F",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    width: "48%",
    backgroundColor: "#ffe0b4",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#232323",
    marginBottom: 4,
  },
  itemLocation: {
    fontSize: 12,
    color: "#232323",
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