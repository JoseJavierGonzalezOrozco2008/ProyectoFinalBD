import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routes from './src/screens/Personal_Screen';

const Stack = createStackNavigator();

const App = () => {
  
    
    return (
        <NavigationContainer>  
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Personal' component={Routes}/> 
            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default App
