import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#54ACEA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}
    >        
        
    </Stack>
  )

    /*return (
        <Tabs>
            <Tabs.Screen name='index' options={{title: "Home", headerStyle: {backgroundColor: }}} />
            <Tabs.Screen name='feed/index' options={{title: "Feed"}} />
        </Tabs>
    )*/
}