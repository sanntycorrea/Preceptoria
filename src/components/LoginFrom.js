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
;