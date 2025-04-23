import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack, Tabs } from 'expo-router'

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{title: "Home"}} />
      <Link style={styles.link} href={"/feed"}>Go to Feed</Link>
    </View>


  )
}

const styles = StyleSheet.create({
  link: {
    fontFamily: "roboto",
    fontSize: 20,
    color: "#54ACEA",
    margin: 10,
    fontWeight: "bold",
  }
});