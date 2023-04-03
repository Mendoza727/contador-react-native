import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>BoxObjectModel</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red'
    },
    title: {
      fontSize: 20,
      margin: 20,
      padding: 20,
      borderWidth: 10,
      textAlign: 'center',
      marginTop: 4,
    },
    flex: {
      flex: 1
    }
});