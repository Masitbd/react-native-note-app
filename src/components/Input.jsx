import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder, secureTextEntry, onChangeText}) {
  return (
<TextInput
 placeholder={placeholder}
 secureTextEntry={secureTextEntry}
 onChange={onChangeText} 
 style={styles.input}
  /> 
    )
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
      },
    })