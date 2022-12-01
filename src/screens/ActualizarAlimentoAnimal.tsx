import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
interface RoutesProps {}

const Stack = createStackNavigator();

const ip = '192.168.8.6:3000';

let id: any;
let nombre: any;
let descripcion: any;
let cantidad: any;
let tipoUnidad: any;

let msg: any;

const ActualizarAlimentoAnimal_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [idAlimAnim, setIdAlimAnim] = useState('');
  const [idAlimAnimf, setIdAlimAnimf] = useState(0);

  const [nombre,setNombre] = useState('');
  const [descripcion,setDescripcion] = useState('')
  const [cantidad,setCantidad] = useState('')
  const [catidadf,setCantidadf] = useState(0)
  const [tipoUnidad,setTipoUnidad] = useState('')
  const [tipoUnidadf, setTipoUnidadf] = useState(0)


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Modal animationType="slide" visible={modalVisible1}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese algún dato!</Text>
            <Image
              source={require('../../assets/cow2.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />

            <Button
              title="Entendido"
              onPress={() => {
                setModalVisible1(false);
              }}
            />
          </View>
        </Modal>
        <Modal animationType="slide" visible={modalVisible2}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              ¡Ingrese algún valor numérico válido!
            </Text>
            <Image
              source={require('../../assets/cow2.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />
            <Button
              title="Entendido"
              onPress={() => {
                setModalVisible2(false);
              }}
            />
          </View>
        </Modal>
        <Modal animationType="slide" visible={modalVisible3}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Actualización de Datos Correcta</Text>
            <Image
              source={require('../../assets/pig.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />
             <Image
              source={require('../../assets/success.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />
          </View>
        </Modal>
        <Text style={styles.txtTitle}>Actualizar Alimento Animal</Text>
        <Text style={styles.insText}>
          Ingrese el ID del alimento de animal a actualizar:
        </Text>
        <Input
          value={idAlimAnim}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveID(idd)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el nombre del alimento de animal a actualizar:
        </Text>
        <Input
          value={nombre}
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={nombree => saveNombre(nombree)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>
          Ingrese la descripción del alimento de animal a actualizar:
        </Text>
        <Input
          value={descripcion}
          style={styles.input}
          placeholder="Ingrese Descripción"
          onChangeText={descripcionn => saveDescripcion(descripcionn)}
          autoCompleteType={undefined}
        />

        
        <Text style={styles.insText}>
          Ingrese la cantidad del alimento de animal a actualizar:
        </Text>
        <Input
          value={cantidad}
          style={styles.input}
          placeholder="Ingrese la cantidad"
          onChangeText={cantidadd => saveCantidad(cantidadd)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el tipo de unidad del alimento de animal a actualizar:
        </Text>
        <Input
          value={tipoUnidad}
          style={styles.input}
          placeholder="Ingrese el tipo de unidad"
          onChangeText={unidadd => saveTipoUnidad(unidadd)}
          autoCompleteType={undefined}
        />
        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Actualizar</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (idAlimAnim === '') {
      setIdAlimAnim('');

      setModalVisible1(true);
    } else {
      if (!isNaN(idAlimAnimf) && idAlimAnimf != 0) {
        console.log('funcion')
        fetch(`https://rancho.onrender.com/alimentoAnimal/update-alimentoAnimal/` + idAlimAnimf, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            Nombre: nombre,
            Descripcion: descripcion,
            Cantidad:catidadf,
            TipoUnidad: tipoUnidad,
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log('Entré ', responseJson);
            setModalVisible3(true)
            navigation.navigate('Personal' as never)
            
          })
          .catch(error => {
            setIdAlimAnim('');
            setIdAlimAnimf(0);
            setNombre('')
            setDescripcion('')
            setCantidad('')
            setCantidadf(0)
            setTipoUnidad('')
            setTipoUnidadf(0)
            console.log(error);
          });
      } else {
        setIdAlimAnim('');
        setIdAlimAnimf(0);
        setNombre('')
        setDescripcion('')
        setCantidad('')
        setCantidadf(0)
        setTipoUnidad('')
        setTipoUnidadf(0)
        setModalVisible2(true);
      }
    }
  }
  function saveID(idd: string) {
    setIdAlimAnim(idd);
    let n: number = parseInt(idd);
    setIdAlimAnimf(n);
  }

  function saveNombre(nombree: string) {
    setNombre(nombree);
  }

  function saveDescripcion(descripcionn: string) {
    setDescripcion(descripcionn);

  }
  function saveCantidad(cantidadd: string) {
    setCantidad(cantidadd);
    let n: number = parseInt(cantidadd);
    setCantidadf(n);
  }

  function saveTipoUnidad(unidadd: string) {
    setTipoUnidad(unidadd);
    let n: number = parseInt(unidadd);
    setTipoUnidadf(n);
  }
};


const ActAlimAnimalInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeConsAlimAnim"
        component={ActualizarAlimentoAnimal_Screen}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
  icon: {
    color: '#c1c1c1',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: '100%',
    marginTop: 40,
  },

  text: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'white',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 200,
    marginLeft: 40,
  },
  modalText: {
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
  },
  Image: {
    height: 130,
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  modal2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    height: 400,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 200,
    marginLeft: 40,
  },
  insText: {
    fontSize: 20,
    color: '#3E3838',
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    padding: 15,
  },
  txtTitle: {
    fontSize: 25,
    color: '#921818',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default ActAlimAnimalInic;
