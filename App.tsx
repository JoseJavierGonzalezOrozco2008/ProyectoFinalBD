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
import ElimAct_Screen from './src/screens/EliminarAct_Screen';
import ElimDireccion_Screen from './src/screens/EliminarDireccion_Screen';
import AlimVentaInic from './src/screens/RegistrarAlimentoVenta_Screen';
import ElimMatPri_Screen from './src/screens/EliminarMatPri_Screen';
import ElimAlimVen_Screen from './src/screens/EliminarAlimentoVenta';
import ElimCompra_Screen from './src/screens/EliminarCompra_Screen';
import ElimCliente_Screen from './src/screens/EliminarCliente_Screen';
import ElimAnimal_Screen from './src/screens/EliminarAnimal_Screen';
import ElimPersonal_Screen from './src/screens/EliminarPersonal_Screen';
import ElimProveedor_Screen from './src/screens/EliminarProveedor_Screen';
import ElimTipoAnim_Screen from './src/screens/EliminarTipoAnimal_Screen';
import ElimVenta_Screen from './src/screens/EliminarVenta_Screen';
import RegistrarActividad_Screen from './src/screens/RegistrarActividad_Screen';
import PersonalInic from './src/screens/RegistrarPersonal_Screen';
import CompraInic from './src/screens/RegistrarCompra_Screen';
import ConsTipAnimInic from './src/screens/ConsultarTipoAnimal_Screen';

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
                <Stack.Screen name='RegAlimVenta' component={AlimVentaInic}/> 
                <Stack.Screen name='ElimAct' component={ElimAct_Screen}/> 
                <Stack.Screen name='ElimDir' component={ElimDireccion_Screen}/> 
                <Stack.Screen name='ElimMatP' component={ElimMatPri_Screen}/> 
                <Stack.Screen name='ElimAlimVen' component={ElimAlimVen_Screen}/> 
                <Stack.Screen name='ElimCompra' component={ElimCompra_Screen}/> 
                <Stack.Screen name='ElimCliente' component={ElimCliente_Screen}/> 
                <Stack.Screen name='ElimAnimal' component={ElimAnimal_Screen}/> 
                <Stack.Screen name='ElimPersonal' component={ElimPersonal_Screen}/> 
                <Stack.Screen name='ElimProveedor' component={ElimProveedor_Screen}/> 
                <Stack.Screen name='ElimTipoAnim' component={ElimTipoAnim_Screen}/> 
                <Stack.Screen name='ElimVenta' component={ElimVenta_Screen}/> 
                <Stack.Screen name='RegActividad' component={RegistrarActividad_Screen}/> 
                <Stack.Screen name='RegPersonal' component={PersonalInic}/> 
                <Stack.Screen name='RegCompra' component={CompraInic}/> 
                <Stack.Screen name='ConsTipoAnimal' component={ConsTipAnimInic}/> 

                
            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default App
