import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput, Modal, Button } from 'react-native';
import { Input  } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginForm = () => {

  const [showPassword, setshowPassword] = useState(false)

const [modalVisible1, setModalVisible1] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [modalVisible3, setModalVisible3] = useState(false);


  const [user, setUser] = useState("")
  const [passw, setPassw] = useState("")

function saveUser(usr: any){
  setUser(usr)
}
function savePass(psw: any){
  setPassw(psw)

}

function validarVacio(){
  if( user === '' && passw != ''){
    setUser('')
    setPassw('')
    //Alert.alert("Ingrese un nombre!!")
    setModalVisible1(true)
  }else if( passw === '' && user != ''){
    setUser('')
    setPassw('')
    //Alert.alert("Ingrese una Contraseña!!")
    setModalVisible2(true)
  }else if(user === '' && passw === ''){
    //Alert.alert("Rellene los campos")
    setModalVisible3(true)
  }else{
    fetch('url',{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        cuenta: user,
        contra: passw,
      })
    })
    .then((respuesta) => respuesta.json())
    .then((responseJson) =>{
      Alert.alert(responseJson);

      AsyncStorage.setItem('token','86');
      
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
  
  return (
    <View style={styles.container}>
      <Modal animationType='slide' visible={modalVisible1}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese el nombre de usuario!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible1(false)}}/> 
          </View>
      </Modal>
      <Modal animationType='slide' visible={modalVisible2}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese la contraseña!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible2(false)}}/> 
          </View>
      </Modal>
      <Modal animationType='slide' visible={modalVisible3}>
          <View style={styles.modal}>
            
            <Text style={styles.modalText}>¡Rellene los campos!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible3(false)}}/> 
          </View>
      </Modal>
        <Input
          style={styles.input}
          placeholder='Usuario'
          onChangeText={(user) => saveUser({user})}
       />
        <Input
          placeholder='Contraseña'
          style={styles.input}
          secureTextEntry={!showPassword}
          onChangeText={(pass) => savePass({pass})}
          rightIcon={
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

              <Image 
                source={ showPassword ? require('../../assets/ojo1.jpg') : require('../../assets/ojo.jpg')} style={{
                  width:30,
                  height:30
                }}
                />

            </TouchableOpacity> 
     
            
          }
        >
           
        </Input>
          
          
          <TouchableOpacity style={styles.btn} onPress={() => validarVacio()}>
            <Text style={styles.text}>Iniciar Sesión</Text>
          </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,

  },
  input: {
      width: '100%',
      
  },
  icon: {
    color: '#c1c1c1'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#442484',
    padding: 10,
    width: '80%',
    marginTop:40
  },
  
  text: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'white'
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
    fontSize: 25
  },
  Image: {
    height: 130,
    width: '100%',
    marginBottom: 20,
    marginTop: 20
  },

})
export default LoginForm


