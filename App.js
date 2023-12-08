import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const Criar = () => {
    alert('Usuário Criado');
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={styles.Logo} source={require('./assets/DoorSenseLogo.png')} />

      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.Mensagem}>Primeiro acesso? Crie seu login e senha!</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="user" size={20} color="#05AFF2" style={styles.icon} />
          <TextInput
            placeholder='Crie seu Usuario'
            style={styles.TextInput}
            onChangeText={text => setUsuario(text)}
          />
        </View>
        <View style={styles.Linha} />

        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#05AFF2" style={styles.icon} />
          <TextInput
            secureTextEntry={true}
            placeholder='Crie uma senha'
            style={styles.TextInput}
            onChangeText={text => setSenha(text)}
          />
        </View>
        <View style={styles.Linha} />

        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#05AFF2" style={styles.icon} />
          <TextInput
            secureTextEntry={true}
            placeholder='Confirme a senha'
            style={styles.TextInput}
            onChangeText={text => setConfirmar(text)}
          />
        </View>
        <View style={styles.Linha} />
      </View>

      <TouchableOpacity style={styles.btnCriar} onPress={() => Criar()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Logo: {
    width: '45%',
    height: '20%',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#05AFF2',
    fontSize: 52,
  },
  Mensagem: {
    fontSize: 15,
    fontWeight: 'light',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  TextInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,

  },
  Linha: {
    borderBottomWidth: 2,
    borderBottomColor: '#05AFF2',
    width: '100%',
    marginBottom: 25
  },
  btnCriar: {
    width: '30%',
    height: 40,
    backgroundColor: '#05AFF2',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
});
