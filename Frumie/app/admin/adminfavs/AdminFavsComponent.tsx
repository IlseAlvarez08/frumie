import React from 'react'
import { StyleSheet, Text, View, FlatList,  SafeAreaView,Button, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import HeaderComponent from '../../layouts/header/HeaderComponent';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';   
import ItemNotiComponent from '../partials/ItemNotiComponent';
export default function AdminFavsComponent ({navigation,props}:any){
      const data:any = [
        {id:1, title:'Mensaje',description:'No funciona el boiler Dpto Alamedas',date:'12/10/2022'},
        {id:1, title:'Alerta',description:'Se ha registrado su casa correctamente',date:'12/10/2022'},
        {id:1, title:'Mensaje',description:'Sin luz Dpto colinas',date:'12/10/2022'},
      ];

     
       
       return (
        <View style={styles.container}>
        <HeaderComponent navigation={navigation} />
       
       
        <View style={styles.view}>
          <Text style={styles.title}>
            <FontAwesome name="bell" size={18} color="#3c1c5d" /> Notificaciones
          </Text>
          
          <FlatList
           data={data}
           keyExtractor={(item, index) => {
             // console.log("index", index)
             return index.toString();
           }}
            renderItem={({ item }) => (
              <ItemNotiComponent data={item} navigation={navigation} />
            )}
          />
        </View>
      
    </View>
        
       );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  view:{
    flex:1,
    paddingLeft:10,
    paddingRight:10
  },
  title:{
    paddingTop: 20,
    fontWeight: "bold",
    color:'#4d4d4d'
  }
  
});