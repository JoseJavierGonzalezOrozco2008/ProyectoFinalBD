import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routes from './src/screens/Personal_Screen';
import Routes1 from './src/screens/Admin_Screen';
import ProvInic from './src/screens/RegistrarProveedor_Screen';
import ClientInic from './src/screens/RegistrarClientes_Screen';
import AlimAnimInic from './src/screens/RegistrarAlimentoAnimal_Screen';
import MatPrimInic from './src/screens/RegistrarMatPrim';

const Stack = createStackNavigator();

const App = () => {
  
    
    return (
        <NavigationContainer>  
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Personal' component={Routes}/> 
                <Stack.Screen name='Admin' component={Routes1}/> 
                <Stack.Screen name='RegProv' component={ProvInic}/> 
                <Stack.Screen name='RegCli' component={ClientInic}/> 
                <Stack.Screen name='RegAlimAnim' component={AlimAnimInic}/> 
                <Stack.Screen name='RegMatPrim' component={MatPrimInic}/> 


            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default App
