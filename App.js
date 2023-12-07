import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import SignIn from './src/screens/sign-in';
import SignUp from './src/screens/sign-up';
import Edit from './src/screens/edit';
import Create from './src/screens/create';
import FlashMessage from "react-native-flash-message";
import { useEffect, useState } from 'react';
import { auth } from './src/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ActivityIndicator } from 'react-native-paper';


const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


  /* useEffect(() => {
    signOut(auth)
   }, [])  */
  
  //const user = false

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
     if(user){
      setUser(user);
      setLoading(false)
     }
     else{
      setUser(null);
      setLoading(false)
     }
    })
     return authSubscription
  },[]);

  

  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='blue' size='large' />
  </View>
  
  /* if (loading) {
    return (
      setTimeout(() => {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='blue' size='large' />
          </View>
        );
      }, 30000)
    );
  } */
  
  return (
    <NavigationContainer theme={AppTheme}>
    <Stack.Navigator>
      {
      user ? (
        <>
      {/* <Stack.Screen name="Home" component={Home}/> */}
      <Stack.Screen name="Home" options={{headerShown:false}}>
      {
        (props) => <Home {...props} user={user} />
      }  
      </Stack.Screen>
      <Stack.Screen name="Create" component={Create}/>
      <Stack.Screen name="Edit" component={Edit}/>
      </>
      ):(
        <>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp}/>
       </>
      )
    }
   
    </Stack.Navigator>
    <FlashMessage position="top" />
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
