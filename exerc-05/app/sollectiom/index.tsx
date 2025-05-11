import { View, Text, StatusBar, StyleSheet, FlatList, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import data from '@/data/data.js';
import Ball from '@/components/Ball';

const [matriz, setMatriz] = useState<number[]>([]);
const [sorteadas, setSorteadas] = useState<number[]>([]);

useEffect(() => {
    for (let i = 0; i < 12; i++)
        matriz.push(Math.floor(Math.random() * 60) + 1);
}, [])

const handleSorttin = () => {
    if (matriz.length > 0) {
        const randomIndex = Math.floor(Math.random() * matriz.length);
        const selectedNumber = matriz[randomIndex];

        setMatriz(matriz.filter((_, index) => index !== randomIndex));
        setSorteadas([...sorteadas, selectedNumber]);
    }
}

export default function Sollectiom() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Stack.Screen options={{title: "Sollectiom", headerStyle: {backgroundColor: '#191919'}, headerTintColor: '#FFFFFF', headerShadowVisible: false, headerTitleAlign: 'center'}} />
        <FlatList data={matriz} numColumns={4} renderItem={({item}) => {
            return (
                <Ball number={item} />
            )
        }} />

        <Pressable style={styles.button} onPress={handleSorttin} >
            <Text style={styles.buttonText}>Sollectiom</Text>
        </Pressable>

        <FlatList data={sorteadas} numColumns={4} renderItem={({ item }) => {
            return (
                <Ball number={item} />
            )
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  button: {
    backgroundColor: '#7F1414',
    width: 250,
    height: 50,
    margin: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})