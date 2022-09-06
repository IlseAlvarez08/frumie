import { Image, TextInput, View, Text,ImageBackground,TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import React, { useState } from 'react';
import Swiper from 'react-native-swipe-image';
import { Entypo } from '@expo/vector-icons'; 
import styles from './styles'
export default function PostViewComponent ({navigation}:any){
      let images:any = [
          { url: require('../../../assets/fachada.png'), name:"" },
          { url: require('../../../assets/fachada_bw.png'), name:"" },
          { url: require('../../../assets/fachada_ck.png'), name:"" },
        ]
        let bottom =(e:any)=> {
          alert('Swipe Bottom 2')
        }
      
        let top =(e:any)=> {
          alert('Swipe Top')
        }
       
       return (
        <View style={styles.container}>
            
            <ScrollView >
              <View style={{ height: 200,marginTop:20,borderRadius:20}}>
                <Image source={{ uri: 'https://grijalvaromero.deskode.com/frumie/fachada.png'}} style={{height:200}} />
              </View>
              <View style={styles.js}>
                
                <View><Text style={{fontSize:30, fontWeight:'bold', color:'#3c1c5d'}}>$2,000.00</Text></View>
                <View style={styles.fondo}>
                  <FontAwesome name="check" size={15} color="#FFF" />
                  <Text style={{color:'white'}}> Pagado 12/10/2022</Text>
                </View>
              </View>
              {/* SERVICIOS */}
              <Text style={styles.h1}>Status de Servicios</Text>
              <View style={styles.js}>

                <View style={styles.card}>
                  <View><Entypo name="light-bulb" size={15} color="#a3a3a3" /></View>
                  <Text style={{color:'#a3a3a3'}}> Luz</Text>
                  <View style={styles.circle}><FontAwesome name="check" size={10} color="#FFF" /></View>
                </View>
                <View style={styles.card}>
                  <View><Entypo name="water" size={15} color="#a3a3a3" /></View>
                  <Text style={{color:'#a3a3a3'}}> Agua</Text>
                  <View style={styles.circle}><FontAwesome name="check" size={10} color="#FFF" /></View>
                </View>
                <View style={styles.card}>
                  <View><Entypo name="network" size={15} color="#a3a3a3" /></View>
                  <Text style={{color:'#a3a3a3'}}> Internet</Text>
                  <View style={styles.circle}><FontAwesome name="check" size={10} color="#FFF" /></View>
                </View>
              </View>
              {/* DETALLES FRUMIE */}
              <Text style={styles.h1}>Detalles Arrendador</Text>
              <View style={styles.item}>
                <View style={styles.col}>
                  <Entypo name="location" size={20} color="#a3a3a3" />
                </View>
                <View style={styles.col}>
                  <Text style={styles.title}>Av. Casas #2303 Nuevo Casas Grandes</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={styles.col}>
                  <FontAwesome name="calendar" size={20} color="#a3a3a3" />
                </View>
                <View style={styles.col}>
                  <Text style={styles.title}>Día de pago: 15 del mes</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={styles.col}>
                  <FontAwesome name="user" size={20} color="#a3a3a3" />
                </View>
                <View style={styles.col}>
                  <Text style={styles.title}>Frumie: Luis Alberto Grijalva</Text>
                </View>
              </View>
                {/* DETALLES FRUMIE */}
                <Text style={styles.h1}>Mensajes</Text>
                <View style={styles.item}>
                  <View style={styles.col}>
                    <ImageBackground source={{ uri:'https://grijalvaromero.deskode.com/frumie/profile.png' }} 
                        style={{ width:20, height:20, paddingBottom: 50, borderRadius: 10 }}/>    
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.title}>Ilse Álvarez</Text>
                    <Text style={styles.text}>Buen día, el boiler no funciona</Text>
                  </View>
                </View>
                <View style={styles.item}>
                 
                  <View style={styles.col}>
                    <ImageBackground source={{ uri:'https://grijalvaromero.deskode.com/frumie/profile.png' }} 
                        style={{ width:20, height:20, paddingBottom: 50, borderRadius: 10 }}/>    
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.title}>Luis Alberto Grijalva</Text>
                    <Text style={styles.text}>Enseguida mando a repararlo</Text>
                  </View>
                  
                </View>
                <View style={styles.item}>
                  <View style={styles.col}>
                    <ImageBackground source={{ uri:'https://grijalvaromero.deskode.com/frumie/profile.png' }} 
                        style={{ width:20, height:20, paddingBottom: 50, borderRadius: 10 }}/>    
                  </View>
                  <View style={styles.col}>
                    <TextInput
                        style={styles.input}
                      />
                  </View>
                 
                </View>
            </ScrollView>
         
          
        </View>
        
       );
}
