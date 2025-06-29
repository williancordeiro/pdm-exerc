import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { GlobalStyle } from '@/style/GlobalStyle'

export default function Header(props: ViewProps) {
  return (
    <View style={[GlobalStyle.header]}>
      {props.children}
    </View>
  )
}