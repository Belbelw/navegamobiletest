import React, { useState } from 'react';
import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { globalStyles as styles } from '../../styles/global';
import { colors } from '../../styles/colors';
import ActionButton from '../../components/ActionButton';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (!usuario.trim()) {
      Alert.alert('Campo obrigatório', 'Informe o usuário.');
      return;
    }
    if (!senha) {
      Alert.alert('Campo obrigatório', 'Informe a senha.');
      return;
    }
    // Credenciais fictícias, definidas apenas para testar a atividade.
    if (usuario.trim().toLowerCase() === 'aluno' && senha === '123456') {
      navigation.replace('Home');
    } else {
      Alert.alert('Não foi possível entrar', 'Usuário ou senha inválidos.');
    }
  }

  function limpar() {
    setUsuario('');
    setSenha('');
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 22 }}>
        <View style={{ alignItems: 'center', marginBottom: 25 }}>
          <View style={{ width: 74, height: 74, borderRadius: 22, backgroundColor: colors.primary,
            alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
            <Text style={{ color: '#FFF', fontSize: 29, fontWeight: '800' }}>N</Text>
          </View>
          <Text style={[styles.title, { fontSize: 29 }]}>Navega Mobile</Text>
          <Text style={styles.subtitle}>Um jeito simples de conhecer nosso espaço.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Acesse sua conta</Text>
          <Text style={styles.subtitle}>Entre com os dados de demonstração para continuar.</Text>
          <Text style={styles.label}>Usuário</Text>
          <TextInput value={usuario} onChangeText={setUsuario} placeholder="Digite seu usuário"
            placeholderTextColor={colors.muted} autoCapitalize="none" autoCorrect={false}
            style={styles.input} returnKeyType="next" />
          <Text style={styles.label}>Senha</Text>
          <TextInput value={senha} onChangeText={setSenha} placeholder="Digite sua senha"
            placeholderTextColor={colors.muted} secureTextEntry style={styles.input}
            returnKeyType="done" onSubmitEditing={entrar} />
          <ActionButton title="Entrar" onPress={entrar} />
          <ActionButton title="Limpar campos" onPress={limpar} secondary />
          <Text style={[styles.smallText, { marginTop: 17, textAlign: 'center' }]}>
            Acesso de teste: aluno / 123456
          </Text>
        </View>
        <Text style={[styles.smallText, { textAlign: 'center' }]}>
          Aplicativo demonstrativo para fins acadêmicos.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
