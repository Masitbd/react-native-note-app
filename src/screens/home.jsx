import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 


export default function Home({navigation, route, user}) {
  console.log('My user',user);

  const onpressCreate =()=>{
    navigation.navigate('Create', user)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:20}}>
      <Text>My Notes</Text>
      <Pressable onPress={onpressCreate}>
      <AntDesign  name="pluscircleo" size={24} color="black"  />
      </Pressable>
      
      </View>
    </SafeAreaView>
  )
}