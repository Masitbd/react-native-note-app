import { View, Text, Image, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import Input from '../components/Input'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function SignIn() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 


  const navigateToSignUp = () => {
    navigation.navigate('SignUp')
  } 

  const login = () =>{
    signInWithEmailAndPassword(auth, email, password).then((res) =>{

    console.log('Signed in successfully')
    }).catch((err)=>{
      console.log('find', err);
    })}
   
  return (
    <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 10}}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop: 10}}>
      <Text>sign-in</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?size=626&ext=jpg&ga=GA1.1.757888490.1700243575&semt=ais',
          height: 300, width:300 
        }}
      />
      <Text style ={{fontSize: 18}}>Never forget your notes</Text>
    </View>
    <View>
      {/* <TextInput style={styles.input} placeholder='Email' /> */} 
      <TextInput style={styles.input} placeholder='Email' onChangeText={(text)=>setEmail(text)} /> 
      <TextInput style={styles.input} placeholder='password' autoCapitalize='none' secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/> 
      </View>
    <Button onPress={login} title={'Login'} custtomStyles={{marginTop: 10}}  />
  
    <View>
       <Pressable onPress={()=> navigation.navigate('SignUp')}>
       <Text style={styles.accountLink}>Don't have an account? <Text style={{color:'blue'}}>Sign up</Text></Text>
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
  }
})