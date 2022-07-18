import React from "react";
import { View, SafeAreaView, Checkbox, TextInput, View, Button } from "react-native";

export default function CreateCuenta(){
    return(
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

export default function InicioSesion(){
    return(
        <View>
        <TextInput placeholder="Correo/Nombre Usuario"></TextInput>; 
        <TextInput placeholder="Contraseña"></TextInput>;
        <Checkbox placeholder="Mantener Sesion"></Checkbox>
        </View>
    )
}

export default function AjustesUsuario(){
    return(
        <View>
        <Button title="Subir Foto de Perfil"/>    
        <TextInput placeholder="Nombre Usuario"></TextInput>
        <TextInput placeholder="Correo"></TextInput>
        <TextInput placeholder="Correo"></TextInput>
        <Button title="Cerrar Sesion"/>
        </View>        
    )
}
