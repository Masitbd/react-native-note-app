import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { FlatList } from 'react-native';


export default function Home({navigation, route, user}) {
const [notes, setNotes] = useState([])

useEffect(()=>{

  // Create a query
  const q = query(collection(db, 'notes'), where("uid", "==", user.uid))
  
  // Create a listener to listen the query when it changes
  const notesLienerSubscription = onSnapshot(q, (querySnapShort) =>{
    const list = []

    querySnapShort.forEach(doc =>{
      list.push(doc.data())
    })
    setNotes(list)
  })
  return  notesLienerSubscription
},[])
console.log(notes);
  const onpressCreate =()=>{
    navigation.navigate('Create', user)
  }

  const renderItem = ({item}) =>{
    const {title, description, selectedValue} = item
    return(
      <Pressable
      onPress={()=>{
        navigation.navigate('Edit')
      }} 
       style={{height:60, backgroundColor: selectedValue, margin:5, borderRadius:10, padding:15}}>
        <Text style={{color: 'white'}}>{title}</Text>
        <Text style={{color: 'white'}}>{description}</Text>
        
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:20}}>
      <Text>My Notes</Text>
      <Pressable onPress={onpressCreate} >
      <AntDesign  name="pluscircleo" size={24} color="black"  />
      </Pressable>
      </View>
      <View>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        contentContainerStyle={{padding:20}}
      />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  list: {
    padding: 10
},
})