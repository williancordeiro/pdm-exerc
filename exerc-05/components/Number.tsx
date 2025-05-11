import { View, Text, TextProps, StyleSheet } from 'react-native'
import React from 'react'

export default function Number(props: TextProps) {
  return (
    <Text {...props} style={styles.number}>
        {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
    number: {
        fontFamily: 'DyanaPuff',
        fontSize: 30,
        color: '#151515'
    }
})