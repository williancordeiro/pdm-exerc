import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Feed() {
  return (
    <View>
        <Tabs.Screen options={{title: 'Feed'}} />
      <Text>index</Text>
    </View>
  )
}