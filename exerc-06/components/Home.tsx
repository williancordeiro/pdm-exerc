import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyle } from '@/style/GlobalStyle'

export default function Home() {
  return (
    <View style={[GlobalStyle.container]}>
      <Text>Home</Text>
    </View>
  )
}