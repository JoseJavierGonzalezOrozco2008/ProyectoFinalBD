import React, { useEffect, useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/core';


const ip = '192.168.8.6:3000';

function useDatos() {
    const [info, setInfo] = useState<any[]>([])
   
    useEffect(() => {
      fetch(`https://rancho.onrender.com/animales/get-animales`)
        .then(response => response.json())
        .then(datos => {
          setInfo(datos)
        })
    }, [])
   
    return info;
  }



const ConsultarAnimales = () => {

    const navigation = useNavigation();
    const datos = useDatos()
    const header = ['ID Animal', 'ID Tipo Animal', 'Peso','Litros Día','Litros Total','Huevos Día','Huevos Total']

    return (
   
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.txtTitle}>
            Animales
          </Text>
          <Table borderStyle={{borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Row data={header} style={{height: 90, backgroundColor: 'gray'}} textStyle={{color: 'white',textAlign: 'center'}}/> 
            {datos.map(item =>(
                <Row key={item.id_Animal} data={[item.id_Animal, item.id_Tipo_Animal, item.Peso, item.Litros_Dia,item.Litros_Total,item.Huevos_Dia,item.Huevos_Total]} style={{height: 90, backgroundColor: 'white'}} textStyle={{color: 'black',textAlign: 'center'}} /> 
            ))}
          
          </Table> 


          <TouchableOpacity
            style={styles.btn} onPress={() => navigation.navigate('Personal' as never)}>
            <Text style={styles.text}>Hecho</Text>
          </TouchableOpacity>
  
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
  
  
        </ScrollView>
      </SafeAreaView>
    )
}

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
  
  
export default ConsultarAnimales
