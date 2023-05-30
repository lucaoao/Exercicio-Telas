import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

//tela2 at display/Screen2.js
export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tela 2</Text>
      <Card>
        <Text style={styles.paragraph}>Ir para: </Text>
        <Button
          title="Tela 3"
          onPress={() => navigation.navigate('Screen 3')}
        />
        <Text> </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightgreen',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
