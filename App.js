import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import Contato from './src/pages/Contato/Contato';
import { colors } from './src/styles/colors';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: { fontWeight: '700' },
  headerShadowVisible: false,
  contentStyle: { backgroundColor: colors.background },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Navega Mobile', headerBackVisible: false }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
