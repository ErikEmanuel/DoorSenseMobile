import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

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

        <Image style={styles.Logo} source={require('./assets/DoorSenseLogo.png')}/>

        <TextInput placeholder='Crie um Usuario' style={styles.TextInput}onChangeText={Text=>setUsuario} />
        <TextInput secureTextEntry = {true} placeholder='Crie uma senha' style={styles.TextInput}onChangeText={Text=>setSenha} />
        <TextInput secureTextEntry = {true} placeholder='Confirme a senha' style={styles.TextInput}onChangeText={Text=>setConfirmar} />

        <TouchableOpacity style={styles.btnCriar} onPress={()=>Criar}>
          <Text style={{color:'white', textAlign:'center'}}Criar>Criar</Text>
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
    padding: 20
  },
  TextInput:{
    width:'100%',
    heigh:40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft:10,
    marginBottom:10
  },
  btnCriar:{
    width: '30%',
    height: 40,
    backgroundColor: '#05AFF2',
    borderRadius: 5,
    justifyContent:'center',
    

  },
  Logo:{
      width: '45%',
      height: '20%',
      marginTop: '-100%'

  }


});
