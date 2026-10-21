import React from 'react';
import { View, Text, Linking, Alert } from 'react-native';
import { globalStyles as styles } from '../../styles/global';
import { colors } from '../../styles/colors';
import ActionButton from '../../components/ActionButton';

export default function Contato({ navigation }) {
  async function abrirEmail() {
    const url = 'mailto:contato@navegamobile.example';
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else Alert.alert('E-mail', 'contato@navegamobile.example');
    } catch {
      Alert.alert('E-mail', 'contato@navegamobile.example');
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={{ color: colors.secondary, fontWeight: '700', marginBottom: 10 }}>ATENDIMENTO</Text>
        <Text style={styles.title}>Entre em contato</Text>
        <Text style={styles.subtitle}>Estes dados são fictícios e foram incluídos apenas para a atividade.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={{ color: colors.text, fontSize: 16 }}>contato@navegamobile.example</Text>
        <Text style={styles.label}>Telefone</Text>
        <Text style={{ color: colors.text, fontSize: 16 }}>(11) 4000-1234</Text>
        <Text style={styles.label}>Endereço</Text>
        <Text style={{ color: colors.text, fontSize: 16, lineHeight: 23 }}>Rua da Tecnologia, 120 — Centro, São Paulo/SP</Text>
        <Text style={styles.label}>Horário de atendimento</Text>
        <Text style={{ color: colors.text, fontSize: 16 }}>Segunda a sexta, das 9h às 17h</Text>
        <ActionButton title="Enviar e-mail" onPress={abrirEmail} />
      </View>
      <ActionButton title="Voltar para Home" secondary onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
