import { View, Text, Image, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'; 




export default function SignUp() {
  const navigation = useNavigation()
  const [selectedValue, setSelectedValue] = useState('option1'); 
  
  return (
    <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 10}}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop: 10}}>
      <Text>sign up</Text>
      
      <Text style ={{fontSize: 18}}>Never forget your notes</Text>
    </View>
    <View>
       <TextInput style={styles.input} placeholder='Email' /> 
       <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/> 
       <TextInput style={styles.input} placeholder='Full name' /> 
       <TextInput style={styles.input} placeholder='Age' /> 
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
    <Button title={'Login'} custtomStyles={{marginTop: 10}}  />
   <View>
    <Pressable onPress={()=> navigation.navigate('SignIn')}>
       <Text style={styles.accountLink}>Already have an account? <Text style={{color:'blue'}}>Sign in</Text></Text>
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