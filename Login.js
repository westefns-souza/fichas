import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from './firebaseConfig';

const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Login bem-sucedido
        Alert.alert('Login realizado com sucesso!');
      })
      .catch((error) => {
        // Ocorreu um erro durante o login
        Alert.alert('Erro', error.message);
      });
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />
      <Text>Senha:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;