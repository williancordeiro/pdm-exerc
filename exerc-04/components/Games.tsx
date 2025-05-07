import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type GamesProps = {
  title: string;
  plataform: string;
  metacritic: number;
};

export default function Games({ title, plataform, metacritic }: GamesProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>Platform: {plataform}</Text>
      <Text style={styles.details}>Metacritic: {metacritic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});