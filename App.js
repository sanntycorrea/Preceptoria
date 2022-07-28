import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginForm></LoginForm>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});