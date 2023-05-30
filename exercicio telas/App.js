import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//o import de telas vem logo abaixo
import Screen1 from './display/Screen1';
import Screen2 from './display/Screen2';
import Screen3 from './display/Screen3';

//cria uma pilha que gerenciará a navegação entre telas.
const Stack = createNativeStackNavigator();

//por favor apertar nos botões em um navegador com adblock para uma melhor experiência!
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Screen 1'}
        ScreenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen 1" component={Screen1} />
        <Stack.Screen name="Screen 2" component={Screen2} />
        <Stack.Screen name="Screen 3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
