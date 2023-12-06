import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({title, onPress, custtomStyles}) {
  return (
<TouchableOpacity style={[styles.button, custtomStyles]} onPress={onPress}>
 <Text style={styles.title}>{title}</Text>
</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   button:{
    borderRedius: 30,
    with: 165,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    },
   title:{
    fontSize: 16,
    color: 'white'
   }
    })