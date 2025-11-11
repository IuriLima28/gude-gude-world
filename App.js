import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState('mail')
  const [senha, setSenha] = useState('')
  return (
    <View style={styles.container}>
      <Text>Usuário: {email}</Text>
      <TextInput placeholder='Digite seu email'></TextInput>
      <Text>Senha</Text>
      <TextInput placeholder='Digite sua senha'></TextInput>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Entrar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
