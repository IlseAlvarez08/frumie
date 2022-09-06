import React from 'react'
import { StyleSheet, Text, View, FlatList,  SafeAreaView,Button, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import HeaderComponent from '../../layouts/header/HeaderComponent';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';   
import ItemHouseComponent from '../partials/ItemHouseComponent';
export default function PostsComponent ({navigation,props}:any){
      const data:any = [
        {id:1, alias:'Dpto Lomas',address:'Calle Benito #3'},
        {id:2, alias:'Dpto Centro',address:'Calle Tal #3'},
        {id:3, alias:'Casa Dos',address:'Calle Tal2 #3'},
        {id:4, alias:'Casa Dos',address:'Calle Tal2 #3'},
        {id:5, alias:'Casa Dos',address:'Calle Tal2 #3'},
        {id:6, alias:'Casa Dos',address:'Calle Tal2 #3'},
      ];

     
       
       return (
        <View style={styles.container}>
        <HeaderComponent navigation={navigation} />
       
       
        <View style={styles.view}>
          <Text style={styles.h1}>
            <FontAwesome name="home" size={18} color="#3c1c5d" /> Mis Rentas
          </Text>
          
          <FlatList
           data={data}
           keyExtractor={(item, index) => {
             // console.log("index", index)
             return index.toString();
           }}
            renderItem={({ item }) => (
              <ItemHouseComponent data={item} navigation={navigation} />
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
    fontSize:18,
    color:'#4d4d4d'
  },
  h1: {
    paddingTop: 20,
    color: "#1d1d1d",
    fontWeight: "bold",
  },
  
});