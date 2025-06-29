import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import { GlobalStyle } from '@/style/GlobalStyle'

export default function _layout() {
  return <Stack 
    screenOptions={{
      headerStyle: GlobalStyle.header,
      headerTitleStyle: GlobalStyle.title,
    }}
  />
}