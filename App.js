
import react from 'react';
import { StyleSheet, Text,view} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginForm from './src/components/LoginFrom';
import { View } from 'react-native-web';


export default function App () {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
      
      <LoginForm/>
    </View>
  );
}

const styles=StyleSheet.create({
container: {
  flex: 1,
  backgroundClor:"255",
  alignItems:"center",
  justifyContent: "center",
 },
});



