import React from "react";
import { render } from "react-dom";
import { TextInput, TouchableHighlight, View, StyleSheet, Text,} from "react-native"
import { AppRegistry } from "react-native-web";

export default function LoginForm(){
    constructor()
        super()
        this.state={
            title:'',
            subtitle:'',
            comment:'',
        }
    
    render() {
    return (
        <View style={style.Container}>
            <View>
                <TextInput style={Styles.input} placeholder="title" value="this.state.title"/>
                
                <TextInput style={Styles.input} placeholder="subtitle" value="this.state.subtitle" />
                <TextInput style={[Styles.input, Styles.textArea]} placeholder="comment" value="this.state.comment"/>
                <TouchableHighligh>
                    <Text>
                        send
                    </Text>
                </TouchableHighligh>
            </View>
        </View>

);
}
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
AppRegistry.registerComponent('FormsApp',()=>FormsApp);