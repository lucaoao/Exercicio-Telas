import * as React from 'react';
import { Button, Text, View, StyleSheet, Linking } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

//tela3 at display/Screen3.js
export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tela 3</Text>
      <Card>
        <Text style={styles.paragraph}>Ir para: </Text>
        <Button
          title="Tela 1"
          onPress={() => navigation.navigate('Screen 1')}
        />
        <Text> </Text>
        <Button
          title="Tela 2"
          onPress={() => navigation.navigate('Screen 2')}
        />
        <Text> </Text>
        <Button
          title="Botão Surpresa!"
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=e_bEf1C0spY')
          }
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
    backgroundColor: 'pink',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
