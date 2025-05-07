import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import games from '../data/games.js';
import Games from './components/Games.js';

export default function App() {
  return (
    <View style={styles.container}>

      <SectionList 
        sections={games.map((section) => ({
          title: section.category,
          data: section.data,
        }))}
        renderItem={({ item }) => (
          <View>
            <Games 
            title={item.title}
            plataform={item.platform}
            metacritic={item.metacritic}
            />
          </View>
        )}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
