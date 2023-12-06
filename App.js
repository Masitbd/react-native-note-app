import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import SignIn from './src/screens/sign-in';
import SignUp from './src/screens/sign-up';
import Edit from './src/screens/edit';
import Create from './src/screens/create';

const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const Stack = createNativeStackNavigator();
export default function App() {
  const user = false
  return (
    <NavigationContainer theme={AppTheme}>
    <Stack.Navigator>
      {
      user ? (
        <>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Edit" component={Edit}/>
      <Stack.Screen name="Create" component={Create}/>
        </>
      ):(
        <>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp}/>
        </>
      )
    }
    </Stack.Navigator>
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
});
