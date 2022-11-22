import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
const AlimentarAnimal = require('./assets/secciones/alimentar.png');
const AnimalesImg = require('./assets/secciones/animales.png');
const RegistrarAnimal = require('./assets/secciones/nuevo.png');

const Vender = require('./assets/secciones/alimentar.png');
const Almacen = require('./assets/secciones/animales.png');
const Compras = require('./assets/secciones/nuevo.png');
*/

//const route = useRoute();

interface RoutesProps {}

let res: string = '';
let resPuesto: string = '';
//let obj: MyObj = JSON.parse("{'user': 'Hola'}");

interface MyObj {
  nombre: string;
}

interface MyObj1 {
  puesto: string;
}
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Registros = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scroll}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegProv' as never)}>
          <Image
            source={require('../../assets/secciones/RegProveedor.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('RegCli' as never)}>
          <Image
            source={require('../../assets/secciones/RegCliente.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('RegAlimAnim' as never)}>
          <Image
            source={require('../../assets/secciones/RegAlimento.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
         <Text> </Text>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('RegMatPrim' as never)}>
          <Image
            source={require('../../assets/secciones/RegMateriaPrima.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
 
      </View>
    </ScrollView>
  );
};

const Existencias = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../assets/secciones/ConsAnimal.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity style={styles.button2}>
        <Image
          source={require('../../assets/secciones/ConsMateria.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity style={styles.button3}>
        <Image
          source={require('../../assets/secciones/ConsActivi.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text> </Text>
    </View>
  );
};

interface HomeProps {}
export const Usuario = ({}: HomeProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.userContainer}>
      <Image
        source={require('../../assets/Iconos/IconoAdmin.jpg')}
        style={styles.userImg}
      />
      <Text style={styles.userText}>{res}</Text>
      <Text style={styles.textoPuesto}>{resPuesto}</Text>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.navigate('Login' as never)}>
        <Image
          source={require('../../assets/logout.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Usuario') {
            return (
              <Image
                source={require('../../assets/Iconos/userIcon.png')}
                style={styles.icon}
              />
            );
          } else if (route.name === 'Registros') {
            return (
              <Image
                source={require('../../assets/Iconos/IconoRegistro.jpg')}
                style={styles.icon}
              />
            );
          } else if (route.name === 'Existencias') {
            return (
              <Image
                source={require('../../assets/Iconos/IconoExistencias.jpg')}
                style={styles.icon}
              />
            );
          }
        },
        headerShown: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Usuario" component={Usuario} />
      <Tab.Screen name="Registros" component={Registros} />
      <Tab.Screen name="Existencias" component={Existencias} />
    </Tab.Navigator>
  );
};

export function getNameAdm(nombre: any) {
  let obj: MyObj = JSON.parse(nombre);
  res = obj.nombre;
  console.log(res, ' desde Personal_Screen');
}

export function getPuestoAdm(puestoAd: any) {
  console.log('valor al momento de entrar a la funcion ', puestoAd);
  let ps: MyObj1 = JSON.parse(puestoAd);
  resPuesto = ps.puesto;
  console.log(resPuesto, ' desde Personal Screen');
}

const Routes1 = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppTab} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFC8C8',
    padding: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 350,
    height: 100,
    borderRadius: 15,
  },
  icon: {
    width: 40,
    height: 35,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  userImg: {
    width: 180,
    height: 180,
    borderRadius: 100,
    top: -35,
    padding: 20,
  },
  userText: {
    fontSize: 45,
    top: -40,
    color: 'black',
  },
  textoPuesto: {
    fontSize: 25,
    top: -40,
    color: 'gray',
  },
  logoutBtn: {
    top: 90,
    backgroundColor: 'white',
  },
  scroll: {
    paddingTop: 40
  }
});

export default Routes1;
