import { StyleSheet, Text, View, FlatList,ImageBackground,TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import React, { useState } from 'react';
import HeaderComponent from '../layouts/header/HeaderComponent';
import NavComponent from '../layouts/nav/NavComponent';
import ItemNotiComponent from '../partials/ItemNotiComponent';
import { FontAwesome } from '@expo/vector-icons';
export default function NotiComponent ({navigation}:any){
  const data:any = [
    {id:1, title:'Mensaje',description:'El pago de electricidad se ha efectuado correctamente',date:'12/10/2022'},
    {id:2, title:'Alerta',description:'Faltan 3 días para hacer el pago de mensualidad',date:'12/10/2022'},
    {id:3, title:'Mensaje',description:'El pago de servicio de agua se ha efectuado correctamente',date:'12/10/2022'},
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
color: "#1d1d1d",
fontWeight: "bold",
}

});