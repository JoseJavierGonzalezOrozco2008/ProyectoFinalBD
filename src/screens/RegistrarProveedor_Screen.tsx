import { useNavigation } from '@react-navigation/core';
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

interface RoutesProps {}

const Stack = createStackNavigator();

let calle1: string = '';
let numero: string = '';
let colonia: string = '';
let cp: number = 0;
let muni: string = '';
let estado: string = '';
let pais: string = '';

const RegProv2 = () => {

  const navigation = useNavigation();
  
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [razonS, setRazonS] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [estatus, setEstatus] = useState('');

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Modal animationType="slide" visible={modalVisible1}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>¡Ingrese todos los campos!</Text>
              <Image
                source={require('../../assets/cow.png')}
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
            <View style={styles.modal2}>
              <Text style={styles.modalText}>¡Registro Completado Exitosamente!</Text>
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
            <Text style={styles.modalText}>¡Ingrese formato correcto para "Estatus"!</Text>
            <Image
              source={require('../../assets/cow.png')}
              resizeMode="contain"
              style={styles.Image}
            />

            <Button
              title="Entendido"
              onPress={() => {
                setModalVisible3(false);
              }}
            />
          </View>
        </Modal>
           <Text style={styles.txtTitle}>Registrar Proveedor: Paso 2 de 2</Text>
          <Text style={styles.insText}>Ingrese Razón Social:</Text>
          <Input
            value={razonS}
            style={styles.input}
            placeholder="Ingrese la Razón Social"
            onChangeText={razonSS => saveRazonSocial(razonSS)}
            autoCompleteType={undefined}
          />
  
  
         <Text style={styles.insText}>Teléfono:</Text>
          <Input
            value={telefono}
            style={styles.input}
            placeholder="Ingrese el teléfono"
            onChangeText={telefonoo => saveTelefono(telefonoo)}
            autoCompleteType={undefined}
          />
  
         <Text style={styles.insText}>Correo:</Text>
          <Input
            value={correo}
            style={styles.input}
            placeholder="Ingrese el correo"
            onChangeText={correoo => saveCorreo(correoo)}
            autoCompleteType={undefined}
          />
    
         <Text style={styles.insText}>Estatus:</Text>
          <Input
            value={estatus}
            style={styles.input}
            placeholder="Ingrese el estatus"
            onChangeText={estatuss => saveEstatus(estatuss)}
            autoCompleteType={undefined}
          />
  
          <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()} >
            <Text style={styles.text}>Registrar Proveedor</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )

    function saveRazonSocial(razonSS: string){
        setRazonS(razonSS)
    }
    function saveTelefono(telefonoo: string){
        setTelefono(telefonoo)
    }

    function saveCorreo(correoo: string){
        setCorreo(correoo)
    }

    function saveEstatus(estatuss: string){
        setEstatus(estatuss)
    }

    function validoYenvio(){
        if(razonS === '' || telefono === '' || correo === '' || estatus === ''){
            
            setRazonS('')
            setTelefono('')
            setCorreo('')
            setEstatus('')
            setModalVisible1(true)

        }else{
            /*console.log('Validado')
            navigation.navigate('Admin' as never)
            setModalVisible2(true)*/
            if(estatus.length != 1){
                setModalVisible3(true)
            }else{
                
                fetch('url',{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify({
                        RazonSocial: razonS,
                        Telefono: telefono,
                        Correo: correo,
                        Estatus: estatus,
                    })
                })
                .then((respuesta) => respuesta.json())
                .then(responseJson =>{
                        if(responseJson.ok){
                            console.log('Validado')
                            navigation.navigate('Admin' as never)
                            setModalVisible2(true)
                        }
                })
               .catch(error =>{
                    console.log(error)
               })
              
            }
        }
    }
}
const RegistrarProveedor_Screen = () => {
    const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);


  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [colonia, setColonia] = useState('');
  const [cp, setCP] = useState('');
  const [muni, setMuni] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [cpf, setCPf] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Modal animationType="slide" visible={modalVisible1}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese todos los campos!</Text>
            <Image
              source={require('../../assets/cow.png')}
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
            <Text style={styles.modalText}>¡Ingrese un Código Postal válido!</Text>
            <Image
              source={require('../../assets/cow.png')}
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
            <Text style={styles.modalText}>¡Upps... Algo salió mal!</Text>
            <Image
              source={require('../../assets/cow.png')}
              resizeMode="contain"
              style={styles.Image}
            />
            <Button
              title="Entendido"
              onPress={() => {
                setModalVisible3(false);
              }}
            />
          </View>
        </Modal>
        <Text style={styles.txtTitle}>Registrar Dirección (Proveedor): Paso 1 de 2</Text>
        <Text style={styles.insText}>Ingrese la calle:</Text>
        <Input
          value={calle}
          style={styles.input}
          placeholder="Ingrese la calle"
          onChangeText={callee => saveCalle(callee)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Número</Text>
        <Input
          value={numero}
          style={styles.input}
          placeholder="Ingrese el Número"
          onChangeText={numeroo => saveNumero(numeroo)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Colonia</Text>
        <Input
          value={colonia}
          style={styles.input}
          placeholder="Ingrese la colonia"
          onChangeText={coloniaa => saveColonia(coloniaa)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Código Postal</Text>
        <Input
          value={cp}
          style={styles.input}
          placeholder="Ingrese el Código Postal"
          onChangeText={cpp => saveCP(cpp)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Municipio</Text>
        <Input
          value={muni}
          style={styles.input}
          placeholder="Ingrese el Municipio"
          onChangeText={municipioo => saveMunicipio(municipioo)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Estado</Text>
        <Input
          value={estado}
          style={styles.input}
          placeholder="Ingrese el Estado"
          onChangeText={estadoo => saveEstado(estadoo)}
          autoCompleteType={undefined}
        />

        <Text style={styles.insText}>Pais</Text>
        <Input
          value={pais}
          style={styles.input}
          placeholder="Ingrese el País"
          onChangeText={paiss => savePais(paiss)}
          autoCompleteType={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Dirección</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (calle === '' || numero === '' || colonia === '' || cp === '' || muni === '' || estado === '' || pais === '' ) {
        
        setCalle('')
        setNumero('')
        setColonia('')
        setCP('')
        setCPf(0)
        setMuni('')
        setEstado('')
        setPais('')
        setModalVisible1(true)
    }else{
        if(!isNaN(cpf)){
            fetch('url',{
                method: 'POST',
                headers:{
                  'Accept': 'application/json',
                  'Content-type':'application/json'
                },
                body: JSON.stringify({
                    Calle: calle,
                    Numero: numero,
                    Colonia: colonia,
                    CP: cpf,
                    Municipio: muni,
                    Estado: estado,
                    Pais: pais,
                })
              })
              .then((respuesta) => respuesta.json())
              .then(responseJson =>{
                  if(responseJson.ok){
                    navigation.navigate('regProvs2' as never)
                  }else{
                    setModalVisible3(true)
                  }
               })
               .catch(error =>{
                    /*calle1 = calle
                    console.log(calle)
                    console.log(numero)
                    console.log(colonia)
                    console.log(cpf)
                    console.log(muni)
                    console.log(estado)
                    console.log(pais)
                    console.log(error)

                    navigation.navigate('regProvs2' as never)*/
               })
              
        }else{
            setCalle('')
            setNumero('')
            setColonia('')
            setCP('')
            setCPf(0)
            setMuni('')
            setEstado('')
            setPais('')
            setModalVisible2(true)
        }
    }
  }
  function saveCalle(calle: string) {
    setCalle(calle);
  }
  function saveNumero(numeroo: string) {
    setNumero(numeroo);
  }

  function saveColonia(coloniaa: string) {
    setColonia(coloniaa);
  }

  function saveCP(cpp: string) {
    let n: number = parseInt(cpp);
    setCP(cpp);
    setCPf(n);
  }

  function saveMunicipio(municipioo: string) {
    setMuni(municipioo);
  }
  function saveEstado(estadoo: string) {
    setEstado(estadoo);
  }

  function savePais(paiss: string) {
    setPais(paiss);
  }
};

const ProvInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeProv" component={RegistrarProveedor_Screen} />
      <Stack.Screen name="regProvs2" component={RegProv2} />

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
    backgroundColor: '#B8B8B8',
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
  modal2:{
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
  txtTitle:{
    fontSize: 25,
    color: '#921818',
    marginBottom: 20,
    fontWeight: 'bold'
  }
});

export default ProvInic;
