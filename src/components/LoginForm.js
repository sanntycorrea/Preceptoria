import React from "react";
import { View, Checkbox, TextInput, View, Button } from "react-native"

export default function LoginForm(){
    return(
        <view>
            <TextInput placeholder="email"/>
            <TextInput placeholder="password"/>
            <Button title="aceptar" onPress={()=>console.log("enviar")}/>
            <Button title="aceptar" onPress={()=>console.log("cancelar")}/>
            
        </view>
    )
}
