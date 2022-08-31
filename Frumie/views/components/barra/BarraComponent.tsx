import { StyleSheet, Text, View, Image,  TextInput, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import  HeaderComponent from '../../layouts/header/HeaderComponent';
import  SearchComponent from '../search/SearchComponent';
import  HouseItem from '../houseItem/HouseComponent';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function BarraComponent({navigation}) {
    

  const cambiar = ()=>{ 
    navigation.navigate('HomeF')
   }
   const ubicacion = ()=>{
    navigation.navigate('Ubicacion')
}

    return (
        <View style={styles.view1}>
          <View style={styles.viewBtnsU}>
              <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{width:50, height:5}} onPress={ () => cambiar()}>
                          <Entypo name="home" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{width:50, height:5}} onPress={ () => ubicacion()}>
                          <Entypo name="location-pin" size={40} color="#510094" style={{ alignSelf:'center', paddingTop:5 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{width:50, height:5}}>
                          <AntDesign name="heart" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{width:50, height:5}}>
                          <Ionicons name="notifications" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{width:50, height:5}}>
                          <Ionicons name="options" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                 
                </View>
            </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    view1:{
      flex:1,
      width:510,
      height: 50,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor: '#FFFFFFBB',
      flexDirection:'row',
      position:'absolute',
      bottom:25,
      marginleft:100,
      borderRadius:20,
      alignSelf:'center', 
      alignContent:'center'
    },
    viewBtns:{
      height:50,
      width:50,
      alignSelf:'center',
    },
    viewBtnsU:{
      height:50,
      width:470,
      right:20,
      alignSelf:'center',  
      position:'absolute',   
      justifyContent:'space-between',
      flexDirection:'row'
    }
    
  });