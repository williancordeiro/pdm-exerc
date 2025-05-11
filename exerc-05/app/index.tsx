import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const router = useRouter();

const handlePress = () => {
  router.push('/sollectiom');
}

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen options={{title: "Home", headerStyle: {backgroundColor: '#191919'}, headerTintColor: '#FFFFFF', headerShadowVisible: false, headerTitleAlign: 'center'}} />
      <Pressable style={styles.button} onPress={handlePress} >
        <Text style={styles.buttonText}>Sollectiom</Text>
      </Pressable>
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