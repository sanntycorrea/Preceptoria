import React from "react";
import { TextInput, Button, View, Text,} from "react-native"

export default function LoginForm(){
    return (
        <View> 
            <Text>Asistants</Text>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
            <Text>Iniciar sesion</Text>
            <Text></Text><Text></Text>
            <TextInput placeholder="Correo Electronico"/>
            <Text></Text>
            <TextInput placeholder="Contraseña"/>
            <Text></Text><Text></Text><Text></Text>
            <Text>Registrarse</Text><Text></Text>
            <Text></Text><Text></Text>
            <Button title="Registrarse con Google" onPress={() => console.log("Conectando con Google")}/>
            <Text></Text>
            <Button title="Registrarse con Facebook" onPress={() => console.log("Conectando con Facebook")}/>


        

        
        </View>
)
}
