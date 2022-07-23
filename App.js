import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import FistsScren from './src/screens/FirtsScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginForm></LoginForm>
      <FistsScren></FistsScren>
    </View>
  );
}


export default function App() {
  return (
    <View>
      <FistsScren></FistsScren>
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
