
import react from 'react';
import { StyleSheet, Text,view} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginForm from './src/components/LoginForm.js';

export default function App () {
  return (
    <><View style={styles.container} /><StatusBar style="auto" /><LoginForm /></>
  );
}

const styles=StyleSheet.create({
container: {
  flex: 1,
  backgroundClor:"#fff",
  alignItems:"center",
  justifyContent: "center",
 },
});



