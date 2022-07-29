import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import SplashScreen from './src/screens/SplashScreen';


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
    display: 'flex',
    backgroundColor: '#90D6EF',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});