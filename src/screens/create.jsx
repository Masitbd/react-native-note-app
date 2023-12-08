import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RadioButton } from 'react-native-paper'; 
import Button from '../components/Button';
import { collection, addDoc } from "firebase/firestore";
import { showMessage, hideMessage } from "react-native-flash-message";
import { db } from '../firebase';



export default function Create({navigation, route, user}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
 // const [noteColor, setNoteColor] = useState('')
  const [selectedValue, setSelectedValue] = useState('blue'); 
  const [loading, setLoading] = useState(false)


const createNote = async()=>{
 
  setLoading(true)
  try{
     await addDoc(collection(db, 'notes'), {
          title: title,
          description: description,
          selectedValue: selectedValue,
          uid: user.uid
        })
  console.log('result', title);
  setLoading(false) 
  showMessage({
    message: "New note created successfully",
    type: "default",
  });
  navigation.goBack()
  }
     
catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
       console.log("error --->", error.message)
      showMessage({
        message: "error!",
        type: "danger",
      });
      setLoading(false)
      };
}

  return (
    <SafeAreaView style={{marginHorizontal: 20, flex:1}}>
      <TextInput
       style={styles.input} placeholder='Title'
       onChangeText={(text)=>setTitle(text)}
      /> 
      <TextInput
       style={styles.input}
       placeholder='Description'
       onChangeText={(text)=>setDescription(text)}
       multiline={true}
      /> 
       <View style={styles.radioButton}> 
      <RadioButton.Android 
          value="blue"
          status={selectedValue === 'blue' ?  
                  'checked' : 'unchecked'} 
          onPress={() => setSelectedValue('blue')} 
          color="#007BFF"
      /> 
      <Text style={styles.radioLabel}> 
          Blue
      </Text> 
  </View> 
    <View style={styles.radioButton}> 
      <RadioButton.Android 
          value="green"
          status={selectedValue === 'green' ?  
                    'checked' : 'unchecked'} 
          onPress={() => setSelectedValue('green')} 
          color="#007BFF"
      /> 
      <Text style={styles.radioLabel}> 
          Green
      </Text> 
      </View> 
      <View style={styles.radioButton}> 
      <RadioButton.Android 
          value="red"
          status={selectedValue === 'red' ?  
                    'checked' : 'unchecked'} 
          onPress={() => setSelectedValue('red')} 
          color="#007BFF"
      /> 
      <Text style={styles.radioLabel}> 
          Red
      </Text> 
      </View> 
      {
        loading? <ActivityIndicator /> :
     
      <Button onPress={createNote} title={'Create Note'} custtomStyles={{marginTop: 10}}  />
    }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input:{
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    backgroundColor: 'white'
  },
  radioGroup: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: 20, 
    borderRadius: 8, 
    backgroundColor: 'white', 
    padding: 16, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { 
        width: 0, 
        height: 2, 
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
}, 
radioButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
}, 
})