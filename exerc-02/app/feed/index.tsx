import { View, StyleSheet, TextInput, Button, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Link, router, Stack, useRouter } from 'expo-router'

export default function Feed() {


  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() === '')
      return;
    router.push({
      pathname: '/profile/[userName]',
      params: {userName: search}
    });

    //console.log(search);
  }

  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <Stack.Screen 
        name='feed/index'
        options={{
          title: "Feed"
        }}
      />

      <View style={styles.search}>
        <TextInput style={styles.input} onChangeText={setSearch} value={search} placeholder='Search user. . .' />
        <View style={styles.button}>
          <Button title="Search" onPress={handleSearch} />
        </View>
      </View>
      <Link style={styles.link} href={'/'} onPress={router.back}>Return to Home</Link>
    </View>
  )
  
}

const styles = StyleSheet.create({
  link: {
    fontFamily: "roboto",
    fontSize: 20,
    color: "#54ACEA",
    margin: 10,
    marginTop: 50,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: "bold",
  },
  search: {
    margin: 15,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    flex: 1,
    marginEnd: 20,
    borderStyle: 'solid',
    borderRadius: 6,
    paddingStart: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#54ACEA',
    borderRadius: 6,
  }
});