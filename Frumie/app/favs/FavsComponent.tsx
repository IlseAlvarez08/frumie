import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import React, { useState } from 'react';
import HeaderComponent from '../layouts/header/HeaderComponent';
import NavComponent from '../layouts/nav/NavComponent';
export default function FavsComponent ({navigation}:any){
     
       
       return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <ScrollView>
                
            </ScrollView>
         
           <NavComponent navigation={navigation} idUser={1} />
        </View>
        
       );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});