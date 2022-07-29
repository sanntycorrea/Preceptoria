import React from "react";
import { TextInput, Button, View, Text,} from "react-native"

export default function LoginForm(){
    return (
        <View> 
            <Text>Iniciar sesion </Text>
            <TextInput placeholder="Email- nombre de usuario o telefono"/>
            <TextInput placeholder="contraseña"/>
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>
        
        </View>


)
}