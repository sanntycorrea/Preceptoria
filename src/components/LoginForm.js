import React from "react";
import { render } from "react-dom";
import { TextInput, TouchableHighlight, View, StyleSheet, Text,} from "react-native"

export default function LoginForm(){
    constructor(){
        super()
        this.state={
            title:'',
            subtitle:'',
            comment:'',
        }
    }
    render() {
    return (
        <View style={style.Container}>
            <View>
                <TextInput style={Styles.input} placeholder="title" value="this.state.title"/>
                
                <TextInput style={Styles.input} placeholder="subtitle" value="this.state.subtitle" />
                <TextInput style={[Styles.input, Styles.textArea]} placeholder="comment" value="this.state.comment"/>

            </View>
        </View>


)
}
}