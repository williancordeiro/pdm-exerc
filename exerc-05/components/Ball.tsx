import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type BallProps = {
    number: number;
}

export default function Ball({ number }: BallProps) {
  return (
    <View style={styles.ball}>
        <View style={styles.numberSection}>
            <Number>{number && "Erro ao carregar."}</Number>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    ball: {
        backgroundColor: '#4B8334',
    },

    numberSection: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAE3C5',
        borderRadius: 50,
    }
})