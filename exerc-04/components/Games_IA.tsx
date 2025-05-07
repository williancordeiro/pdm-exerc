import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import games from '../data/data';

const Games = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.category.toUpperCase()}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(game) => game.title}
              renderItem={({ item: game }) => (
                <View style={styles.gameContainer}>
                  <Text style={styles.gameTitle}>{game.title}</Text>
                  <Text style={styles.gameDetails}>
                    Platform: {game.platform} | Metacritic: {game.metacritic}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  gameContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  gameDetails: {
    fontSize: 14,
    color: '#777',
  },
});

export default Games;