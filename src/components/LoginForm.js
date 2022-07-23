import React from "react";
import { TextInput, View, Checkbox} from "react-native"

export default function LoginForm(){
    return (
        <View> 
            <TextInput placeholder="Nombre"></TextInput>
        <TextInput placeholder="Apellido"></TextInput>
        <TextInput placeholder="Nombre Usuario"></TextInput>
        <TextInput placeholder="Correo"></TextInput>
        <TextInput placeholder="Contraseña"></TextInput>
        <Checkbox placeholder="Acepta los terminos y condiciones"></Checkbox>
        <Checkbox placeholder="Mantener Sesion"></Checkbox>
        </View>


)
}
