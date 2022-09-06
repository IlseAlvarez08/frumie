import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import { Marker, } from 'react-native-maps';
import React, { useState } from 'react';
import HeaderComponent from '../layouts/header/HeaderComponent';
import NavComponent from '../layouts/nav/NavComponent';
import SearchComponent from '../layouts/search/SearchComponent';
export default function MapComponent ({navigation}:any){
      const cambiar = ()=>{ 
        navigation.navigate('Details')
       }
       const home = ()=>{ 
        navigation.navigate('HomeF')
       }
       const [mapRegion, setmapRegion] = useState({
        latitude: 30.3812019,
        longitude: -107.8809565,
        latitudeDelta: 0.001,
        longitudeDelta: 0.0421,
        
      });
    
       
       return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <View style={{marginTop:-50,height:100}}><SearchComponent  /></View>
            <View style={{marginTop:40}}>
              <MapView style={styles.map}  region={mapRegion}>
                <Marker
                    coordinate={{latitude: 30.3812019,
                    longitude: -107.8809565}}
                    title={"ITSNCG"}
                    description={"Escuela"}
                >
                </Marker>
                <Marker
                    coordinate={{latitude: 30.3820782,
                    longitude: -107.8817124,}}
                    title={"ITSNCG"}
                    description={"Escuela"}
                >
                </Marker>
                <Marker
                    coordinate={{latitude: 30.3819967,
                    longitude: -107.8817124,}}
                    title={"ITSNCG"}
                    description={"Escuela"}
                >
                </Marker>
                <Marker
                    coordinate={{latitude: 30.385135,
                    longitude: -107.8795187,}}
                    title={"ITSNCG"}
                    description={"Escuela"}
                >
                </Marker>
                <Marker
                    coordinate={{latitude: 30.382108,
                    longitude:-107.8840083,}}
                    title={"ITSNCG"}
                    description={"Escuela"}
                >
                </Marker>
              </MapView>
            </View>
         
        </View>
        
       );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});