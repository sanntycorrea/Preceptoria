import React from "react";
import { TextInput, Button, View} from "react-native"

export default function LoginForm(){
    return (
        <View> 
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>
        
        </View>


)
}
const estyles = StyleSheet.create({
    Container:{
        flex:1,
        BackgroundColor:'#f5fcff',

    },
    input:{
        height:40,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20,

    },
    textArea:{
        height:60,

    }
});