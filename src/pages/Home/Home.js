import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles as styles } from '../../styles/global';
import { colors } from '../../styles/colors';
import ActionButton from '../../components/ActionButton';

export default function Home({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={[styles.card, { paddingVertical: 27 }]}>
        <Text style={{ color: colors.secondary, fontWeight: '700', marginBottom: 10 }}>PÁGINA INICIAL</Text>
        <Text style={[styles.title, { fontSize: 27 }]}>Que bom ter você aqui!</Text>
        <Text style={styles.subtitle}>
          Este é o Navega Mobile, um pequeno aplicativo institucional criado para reunir
          informações úteis em um só lugar.
        </Text>
      </View>
      <Text style={[styles.title, { fontSize: 19, marginBottom: 12 }]}>Explore o aplicativo</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 17, fontWeight: '700', color: colors.text }}>Sobre o projeto</Text>
        <Text style={[styles.subtitle, { marginTop: 6 }]}>Conheça a proposta e os valores da aplicação.</Text>
        <ActionButton title="Conhecer o projeto" onPress={() => navigation.navigate('Sobre')} />
      </View>
      <View style={styles.card}>
        <Text style={{ fontSize: 17, fontWeight: '700', color: colors.text }}>Fale com a gente</Text>
        <Text style={[styles.subtitle, { marginTop: 6 }]}>Consulte os canais de atendimento fictícios.</Text>
        <ActionButton title="Ver contato" secondary onPress={() => navigation.navigate('Contato')} />
      </View>
      <Text style={[styles.smallText, { textAlign: 'center', marginTop: 'auto' }]}>Navega Mobile • Versão 1.0</Text>
    </View>
  );
}
