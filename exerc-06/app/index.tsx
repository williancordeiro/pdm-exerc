import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Home from '@/components/Home'
import { GlobalStyle } from '@/style/GlobalStyle'

export default function index() {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <Stack.Screen
        options={{title: 'Home'}}
      />
      <Home />
    </View>
  )
}