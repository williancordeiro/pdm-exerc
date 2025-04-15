import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={style.title}>Login:</Text>
      <TextInput style={style.input} onChangeText={setUsername} value={username} placeholder='username' />
      <TextInput style={style.input} onChangeText={setPassword} value={password} secureTextEntry placeholder='password' />
      <View style={style.button}>
        <Button title='Submit' onPress={() => {console.log("Nome de usuário: "+ username +"\n"+"Senha: "+ password)}} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
    },

    input: {
        height: 60,
        width: 220,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        fontSize: 18,
    },

    button: {
        borderRadius: 5,
        height: 90,
        width: 220,
        marginTop: 10,
    }
});