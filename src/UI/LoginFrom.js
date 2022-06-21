import React from "react";
import{} from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function LoginForm(){
    return (
        <view>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password"/>
    <Button title="Aceptar" onPress={()=>console.log("Enviar")}/>
    <Button title="Aceptar" onPress={()=>console.log("Registrado")}/>
        </view>
    
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