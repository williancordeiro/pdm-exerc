import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Profile() {
  return (
    <View>
        <Tabs.Screen options={{title: 'Profile'}} />
      <Text>index</Text>
    </View>
  )
}