import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView } from 'react-native';


import { Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import NavComponent from '../layouts/nav/NavComponent';
import React from 'react';
import styles from './StylesRommie';
import { FontAwesome5 } from '@expo/vector-icons';
export default function RoomieDetailsComponent({navigation}:any) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const cambiar = ()=>{
    navigation.navigate('HomeView')
    } 
    const cambiar2 = ()=>{
        navigation.navigate('Foto1')
    }
    const cambiar3 = ()=>{
      navigation.navigate('FotoRoomie')
    } 
    const ubicacion = ()=>{
      navigation.navigate('ubicacion') 
    }


    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{height:430}}>
               
                    <ImageBackground 
                    source={{uri: 'https://grijalvaromero.deskode.com/frumie/fachada.png'}}
                    resizeMode="cover" style={styles.image} imageStyle={ { borderRadius: 25, height:310 } 
                    }>
                    <View style={styles.view}>
                        <View style={styles.view2}>
                            <View style={styles.view3}>
                                    <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiar() }>
                                        <Text><Ionicons name="arrow-back-circle-sharp" size={50} color="white" /></Text>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.view4}>
                                    <TouchableWithoutFeedback style={styles.btnPerfil} onPress={ ()=> cambiar3() }>
                                        <ImageBackground
                                          source={{uri: 'https://grijalvaromero.deskode.com/frumie/details/roomie.jpg'}}
                                            resizeMode="cover" style={styles.imagePerfil} imageStyle={{ borderRadius:190 }}
                                        />
                                    </TouchableWithoutFeedback>            
                            </View>
                    </View>
                    
                    </View>
                </ImageBackground>
            </View>
            <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <View >
                    <Text style={{color: "#1d1d1d", fontSize: 22, textAlign: "center", fontWeight:'bold'}}>Esmeralda Vega Salazar - ITSNCG</Text>
                   
                </View>
               
                <View style={styles.js}>

                    <View style={styles.card}>
                        <View><Entypo name="sports-club" size={15} color="#a3a3a3" /></View>
                        <Text style={{color:'#a3a3a3'}}>Deporte</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Entypo name="brush" size={15} color="#a3a3a3" /></View>
                        <Text style={{color:'#a3a3a3'}}>Pintura</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Entypo name="book" size={15} color="#a3a3a3" /></View>
                        <Text style={{color:'#a3a3a3'}}>Lectura</Text>
                    </View>
                </View>
                <Text style={styles.h1}>Detalles de la casa</Text>

                <View style={styles.js}>

                    <View style={styles.card}>
                        <View><Text><FontAwesome5 name="bed" size={16} color="#510094" /></Text></View>
                        <Text style={{color:'#a3a3a3'}}>3 habitaciones</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Text><FontAwesome5 name="bath" size={16} color="#510094" /></Text></View>
                        <Text style={{color:'#a3a3a3'}}>2 Baños</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Text><FontAwesome5 name="wifi" size={16} color="#510094" /></Text></View>
                        <Text style={{color:'#a3a3a3'}}>Wifi</Text>
                    </View>
                </View>
                <View style={styles.viewinfotext}>
                    <Text style={{color: "#a3a3a3", fontSize: 16, textAlign: "justify"}}>La ubicación de la casa es céntrica, cuenta con patio grande, espacio para mascota, 
                        cochera,y sala de juegos  
                    </Text>
                </View>
                <View style={styles.viewinfoubi }>
                        <TouchableWithoutFeedback style={styles.imageubi} onPress={ ()=> ubicacion() }>
                            <Image source={{uri: 'https://grijalvaromero.deskode.com/frumie/details/map.webp'}}
                            style={{ height:200, resizeMode:'cover', borderRadius: 5 }}/>           
                        </TouchableWithoutFeedback>
                </View>
                    <View style={{height:10}}></View>
                    <View style={{height:50, padding:30}}>
                    <TouchableWithoutFeedback style={{height:50}}>
                        <View style={{backgroundColor:'#510094', height:50, borderRadius:5, }}>
                        <Text style={{color: "white",marginTop:8, fontWeight:'bold', fontSize: 22, textAlign: "center"}}>Contactar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    </View>
                <View style={{height:120}}></View>   


            </View>
        
                
            
            {/* GUSTOS */}
           
           
           

      </ScrollView>
    </View>

      
    );
 }
 