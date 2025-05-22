import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function index() {

  const { userName } = useLocalSearchParams();
  
  return (
    <View>
      <Stack.Screen name='profile/index' options={{title: `Profile: ${userName}`}} />
      <Text style={styles.title}>Profile</Text>
      <View style={styles.icon}></View>
      <View style={styles.info}>
        <Text style={styles.name} >Name: <Text style={styles.userName}>{ userName }</Text></Text>
        <Text style={styles.bio}>Bio:</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  icon: {
    marginTop: 20,
    padding: 50,
    marginStart: 145,
    marginEnd: 155,
    backgroundColor: '#D2D2D2',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
  },
  info: {
    margin: 20,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 6,
    paddingTop: 10,
    paddingStart: 10,
    paddingBottom: 100,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  bio: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 5,
    marginTop: 10,
    marginEnd: 10,
    borderTopWidth: 1,
    borderColor: '#D2D2D2',
  }
});