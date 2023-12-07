import { View, Text,  TextInput, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase'
//import { addDoc, collection, getDocs, doc, onSnapshot, query, where } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { showMessage, hideMessage } from "react-native-flash-message";




//const auth = getAuth();

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [name, setName] = useState(''); 
  const [age, setAge] = useState(''); 
  const [selectedValue, setSelectedValue] = useState('option1'); 
  
  const signup =async()=>{
    setLoading(true)
    try{
    const result = await  createUserWithEmailAndPassword(auth, email, password)
     
        await addDoc(collection(db, 'users'), {
          email: email,
          password: password,
          name: name,
          age: age,
          gender: selectedValue,
          uid: result.user.uid
        })
  console.log('result', result);
  setLoading(false) 
  }
     
catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
      // console.log("error --->", error)
      showMessage({
        message: "error!",
        type: "danger",
      });
      setLoading(false)
      };
    
  }
  
  return (
    <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 10}}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop: 10}}>
      <Text>sign up</Text>
      
      <Text style ={{fontSize: 18}}>Never forget your notes</Text>
    </View>
    <View>
       <TextInput style={styles.input} placeholder='Email' onChangeText={(text)=>setEmail(text)} /> 
       <TextInput style={styles.input} placeholder='password' autoCapitalize='none' secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/> 
       <TextInput style={styles.input} placeholder='Full name' autoCapitalize='words' onChangeText={(text)=>setName(text)} /> 
       <TextInput style={styles.input} placeholder='Age' onChangeText={(text)=>setAge(text)} /> 
    </View>
    <View style={styles.radioButton}> 
      <RadioButton.Android 
          value="option1"
          status={selectedValue === 'option1' ?  
                  'checked' : 'unchecked'} 
          onPress={() => setSelectedValue('option1')} 
          color="#007BFF"
      /> 
      <Text style={styles.radioLabel}> 
          Male
      </Text> 
  </View> 
    <View style={styles.radioButton}> 
      <RadioButton.Android 
          value="option2"
          status={selectedValue === 'option2' ?  
                    'checked' : 'unchecked'} 
          onPress={() => setSelectedValue('option2')} 
          color="#007BFF"
      /> 
      <Text style={styles.radioLabel}> 
          Female 
      </Text> 
      </View> 
    <Button onPress={signup} title={'Signup'} custtomStyles={{marginTop: 10}}  />
   <View>
    <Pressable>
       <Text style={styles.accountLink}>Already have an account?
       <Pressable onPress={()=> navigation.navigate('SignIn')}>
       <Text style={{color:'blue'}}>Sign in</Text>
        </Pressable></Text>
        </Pressable>
      </View>
  </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  accountLink:{
   flex: 1,
    alignSelf:'center',
    marginTop: 15
  },
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center', 
    alignItems: 'center', 
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