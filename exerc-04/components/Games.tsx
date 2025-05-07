import { View, Text } from 'react-native'
import React from 'react'

type GamesProps = {
    //category: string;
    title: string;
    plataform: string;
    metacritic: number;
}

export default function Games({ title, plataform, metacritic }: GamesProps) {
  return (
    <View>
        <Text>Games</Text>
        <Text>Title: {title}</Text>
        <Text>Plataform: {plataform}</Text>
        <Text>Metacritic: {metacritic}</Text>
    </View>
  )
}