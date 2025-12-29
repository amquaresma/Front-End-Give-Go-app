# Give&Go - Plataforma de Doação e Troca de Itens 👕🔄

## 📱 Visão Geral

**Give&Go** é uma aplicação mobile desenvolvida em React Native com Expo que conecta pessoas através da doação e troca de itens, focando principalmente em roupas e acessórios. O aplicativo oferece uma experiência mobile simples, intuitiva e acessível para promover o consumo consciente e a reutilização de produtos.

---

## ✨ Funcionalidades Principais

### 🔐 **Autenticação de Usuário**
- Sistema completo de login e cadastro
- Gerenciamento de sessão e credenciais
- Recuperação de conta segura

### 📱 **Feed Dinâmico**
- Visualização em tempo real de itens disponíveis
- Layout otimizado para diferentes tipos de dispositivos
- Sistema de categorização inteligente
- Filtros e busca por localização

### 📸 **Publicação de Itens**
- Criação de anúncios com múltiplas imagens
- Descrições detalhadas e categorização
- Upload de fotos via câmera ou galeria
- Status de disponibilidade em tempo real

### 🏷️ **Sistema de Categorias**
- Navegação intuitiva por categorias (Roupas, Sapatos, Mochilas, Cobertores)
- Subcategorias para refinamento de busca
- Tags personalizadas para melhor organização

### 👤 **Perfil do Usuário**
- Dashboard pessoal com histórico de atividades
- Edição completa de informações do perfil
- Visualização de itens publicados e favoritos
- Sistema de reputação e feedback

### 💬 **Canal de Comunicação**
- Sistema de contato integrado (Fale Conosco)
- Suporte a dúvidas e feedback dos usuários
- Respostas automáticas e acompanhamento

### ✅ **Sistema de Confirmação**
- Fluxos de confirmação para transações
- Status visuais para cada etapa do processo
- Notificações de atualização em tempo real

### 🖼️ **Gerenciamento de Mídia**
- Upload de imagens com otimização automática
- Pré-visualização antes da publicação
- Armazenamento seguro em nuvem

### 🔔 **Sistema de Notificações**
- Alertas personalizados por preferência
- Permissões granulares do dispositivo
- Notificações push para interações importantes

---

## 🎨 Design & Experiência do Usuário

### **Princípios de Design**
- **Mobile-First**: Interface otimizada para uso em smartphones
- **Minimalismo Funcional**: Foco na usabilidade sem elementos desnecessários
- **Consistência Visual**: Padrões de design mantidos em toda a aplicação
- **Feedback Imediato**: Respostas visuais para todas as ações do usuário

### **Sistema de Componentes**
- Biblioteca de componentes reutilizáveis e modulares
- Estilização consistente com `react-native-paper`
- Ícones personalizados via `@expo/vector-icons`
- Animações fluidas para transições entre telas

### **Navegação Intuitiva**
- Estrutura hierárquica clara com `@react-navigation`
- Stack navigation para fluxos lineares
- Drawer navigation para acesso rápido
- Gestos nativos para melhor experiência

### **Acessibilidade**
- Contraste de cores otimizado para visibilidade
- Botões com área de toque ampliada (≥44px)
- Suporte a leitores de tela
- Textos escaláveis para diferentes tamanhos de fonte

---

## 🛠️ Tecnologias e Arquitetura

### **Stack Principal**
- **Expo** - Framework para desenvolvimento React Native
- **React Native** - Biblioteca para interfaces nativas
- **JavaScript (ES6+)** - Linguagem principal
- **JSX** - Sintaxe para componentes React

### **Bibliotecas Essenciais**
```javascript
// UI & Icons
react-native-paper          // Componentes de interface
@expo/vector-icons         // Ícones consistentes

// Navegação
@react-navigation/native   // Navegação principal
@react-navigation/stack    // Navegação em pilha
@react-navigation/drawer   // Menu lateral

// Funcionalidades Nativas
expo-image-picker         // Seleção de imagens
expo-notifications        // Sistema de notificações
expo-constants           // Constantes do ambiente

// Performance
react-native-gesture-handler // Gestos nativos
react-native-reanimated     // Animações performáticas
```

### **Estrutura do Projeto**
```
src/
├── App.js                 # Ponto de entrada principal
├── index.js              # Inicialização do React Native
├── Rotas.js              # Configuração de navegação
│
├── assets/               # Recursos estáticos
│   ├── images/          # Imagens e ícones
│   ├── fonts/           # Fontes personalizadas
│   └── styles/          # Estilos globais
│
├── Login/                # Autenticação
│   ├── Login.js         # Tela de login
│   ├── Cadastro.js      # Tela de cadastro
│   └── Recuperar.js     # Recuperação de senha
│
├── Postagem/            # Sistema de feed
│   ├── Home.js          # Feed principal
│   ├── Home2.js         # Feed alternativo
│   ├── Home3.js         # Feed com filtros
│   └── Detalhes.js      # Detalhes do item
│
├── Postar/              # Publicação
│   ├── NovoItem.js      # Criação de anúncio
│   ├── Postados.js      # Itens publicados
│   └── Editar.js        # Edição de anúncios
│
├── Menu/                # Perfil e configurações
│   ├── Perfil.js        # Visualização do perfil
│   ├── Perfil2.js       # Edição do perfil
│   ├── Configuracoes.js # Configurações
│   └── FaleConosco.js   # Suporte ao usuário
│
├── Roupas/              # Categorias
│   ├── Categorias.js    # Lista de categorias
│   ├── Roupas.js        # Itens de roupa
│   ├── Sapatos.js       # Itens de calçados
│   └── DetalhesCategoria.js
│
└── Caixinha/            # Confirmações e modais
    ├── Confirmar.js     # Modal de confirmação
    ├── Confirmar2.js    # Confirmação alternativa
    └── Sucesso.js       # Feedback de sucesso
```

---

## 🚀 Configuração e Execução

### **Pré-requisitos**
- Node.js 16 ou superior
- npm ou yarn
- Expo CLI instalado globalmente
- Dispositivo físico ou emulador configurado

### **Instalação Passo a Passo**
```bash
# 1. Clone o repositório (se aplicável)
# git clone <repositorio>
# cd give-and-go

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Inicie o servidor de desenvolvimento
npm run start
# ou
expo start

# 4. Execute em sua plataforma preferida
# Pressione 'a' para Android
# Pressione 'i' para iOS
# Pressione 'w' para Web
```

### **Executando no Dispositivo Físico**
1. Instale o aplicativo **Expo Go** na App Store ou Google Play
2. Abra o aplicativo e escaneie o QR code exibido no terminal
3. Aguarde o build e carregamento do aplicativo
4. Conceda as permissões necessárias quando solicitado

---

## 🔧 Configurações de Desenvolvimento

### **Variáveis de Ambiente**
```javascript
// Configure no app.json ou usando dotenv
{
  "expo": {
    "extra": {
      "API_URL": "https://api.giveandgo.com",
      "ENVIRONMENT": "development"
    }
  }
}
```

### **Estrutura de Componentes**
Cada componente segue o padrão:
```javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MeuComponente = ({ propriedades }) => {
  return (
    <View style={styles.container}>
      {/* Conteúdo do componente */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MeuComponente;
```

### **Padrões de Estilização**
- Uso consistente do `StyleSheet.create`
- Cores definidas em arquivo de tema centralizado
- Espaçamentos baseados em múltiplos de 8px
- Tipografia hierárquica clara

---

## 📱 Fluxo de Usuário

### **Para Doadores**
1. **Cadastro** → Criação de perfil pessoal
2. **Publicação** → Upload de itens para doação
3. **Gerenciamento** → Acompanhamento de publicações
4. **Confirmação** → Finalização de doações

### **Para Receptores**
1. **Exploração** → Navegação pelo feed de itens
2. **Busca** → Filtragem por categorias e localização
3. **Interesse** → Expressão de interesse em itens
4. **Confirmação** → Recebimento do item

### **Para Administradores**
1. **Moderação** → Aprovação de conteúdos
2. **Suporte** → Atendimento a usuários
3. **Análise** → Monitoramento de métricas

---



## 📄 Licença

Este projeto está disponível para fins educacionais e de portfólio. Para uso comercial, entre em contato.

---

## 👨‍💻 Desenvolvedor

**Matheus Rodrigues Quaresma**  


---

