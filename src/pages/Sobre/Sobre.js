import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles as styles } from '../../styles/global';
import { colors } from '../../styles/colors';
import ActionButton from '../../components/ActionButton';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={{ color: colors.secondary, fontWeight: '700', marginBottom: 10 }}>QUEM SOMOS</Text>
        <Text style={styles.title}>Sobre o Navega Mobile</Text>
        <Text style={styles.subtitle}>
          O Navega Mobile é um protótipo institucional desenvolvido para praticar a criação
          de telas, a navegação entre páginas e a organização visual de uma aplicação mobile.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={{ fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: 7 }}>Nossa missão</Text>
        <Text style={styles.subtitle}>Apresentar informações de forma clara e fácil de encontrar.</Text>
        <View style={{ height: 16 }} />
        <Text style={{ fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: 7 }}>Nossa visão</Text>
        <Text style={styles.subtitle}>Criar experiências digitais simples, úteis e acessíveis.</Text>
        <View style={{ height: 16 }} />
        <Text style={{ fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: 7 }}>Nossos valores</Text>
        <Text style={styles.subtitle}>Clareza, organização, respeito e facilidade de uso.</Text>
      </View>
      <Text style={styles.smallText}>Projeto acadêmico • Versão 1.0</Text>
      <ActionButton title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
