import { StyleSheet, Text, View, Image,  TextInput, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import  HeaderComponent from '../header/HeaderComponent';
import  SearchComponent from '../search/SearchComponent';
import  HouseItem from '../houseItem/HouseComponent';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';


export default function NavComponent({navigation}:any) {
 
 
   const cambiar = (url:string)=>{
    navigation.navigate(url)
    }

    return (
        <View style={styles.view1}>
          <View style={styles.viewBtnsU}>
              <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{ height:5}} onPress={ () => cambiar('HomeView')}>
                          <Entypo name="home" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{ height:5}} onPress={ () => cambiar('MapView')}>
                          <Entypo name="location-pin" size={40} color="#510094" style={{ alignSelf:'center', paddingTop:5 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{ height:5} } onPress={ () => cambiar('FavsView')}>
                          <AntDesign name="heart" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{ height:5}} onPress={ () => cambiar('NotiView')}>
                          <Ionicons name="notifications" size={30} color="#510094" style={{ alignSelf:'center', paddingTop:10 }}/>
                      </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.viewBtns}>
                      <TouchableWithoutFeedback style={{ height:5}}onPress={ () => cambiar('AdminView')}>
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
      width:"90%",
      alignSelf:'center',
      backgroundColor: '#fff',
    },
    view1:{
      width:"90%",
      height: 50,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor: '#FFFFFFBB',
      flexDirection:'row',
      position:'absolute',
      bottom:25,
      borderRadius:20,
      alignSelf:'center', 
      alignItems:'center',
      justifyContent:'center'
    },
    viewBtns:{
      flex:1,
      height:50,

    },
    viewBtnsU:{
      height:50,
      flex:1,
      width:"100%", 
      position:'absolute',   
      justifyContent:'space-between',
      flexDirection:'row',
    }
    
  });