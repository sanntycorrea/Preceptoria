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
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>
            
            <Text></Text>
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>



        

        
        </View>


)
}
<Button title="Cancelar" onPress={() => console.log("Cancelar")}/>