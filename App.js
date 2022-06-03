
import react from 'react';
import { StyleSheet, Text,view} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginForm from './src/components/LoginForm.js';

export default function App () {
  return (
    <View style={styles.container}>
      <Text> Holaaaaaa</Text>
    <Text>jujuhbhbhvg</Text>
    <StatusBar style="auto"/>
    <LoginForm/> 
    </View>
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



