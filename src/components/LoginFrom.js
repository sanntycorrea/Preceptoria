import React from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function LoginForm(){
    return (
        <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password"/>
    <Button title="Aceptar" onPress={()=>console.log("Enviar")}/>
    <Button title="Aceptar" onPress={()=>console.log("Registrado")}/>
        </View>
    
    )

    
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
        brackgroundcolor: '#ffff',
        alingitems: 'center',
        justifyContent: 'center',

    }

});