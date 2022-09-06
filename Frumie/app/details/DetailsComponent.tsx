import styles from "./Styles";

import {  Text, View, Image,ImageBackground,TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ItemCommentComponent from "../partials/ItemCommentComponent";




export default function DetailsComponent({navigation}:any) {

  const cambiar = ()=>{ 
    navigation.navigate('HomeRoutes')
   }
   const ubicacion = ()=>{
       navigation.navigate('ubicacion')
   }
   let data:any=[
        {id:1,  question:{image:'default.jpg',name:'Ilse Álvarez',date:'justo ahora',text:'¿Cuenta con instalación de Gas Natural?'},
                response:{image:'default.jpg',name:'Juan Pérez',date:'justo ahora',text:'Por el momento no cuenta con instalación de Gas Natural'} },
        {id:2,  question:{image:'default.jpg',name:'Mary',date:'12/11/22',text:'¿Necesito Anticipo?'},
                response:{image:'default.jpg',name:'Juan Pérez',date:'justo ahora',text:'Si por su puesto'} },
        {id:3,  question:{image:'default.jpg',name:'Mary',date:'12/11/22',text:'¿Necesito Anticipo?'},
                response:{image:'default.jpg',name:'Juan Pérez',date:'justo ahora',text:'Si por su puesto'} },
   
    
    ]


    return (
      <View>
        <View style={styles.viewinfo}>
            <Text style={styles.text3}>Descripción</Text>
            <View style={styles.estrellas}>
                <Entypo name="star" size={20} color="#510094" /> 
                <Entypo name="star" size={20} color="#510094" /> 
                <Entypo name="star" size={20} color="#510094" /> 
                <Entypo name="star" size={20} color="#510094" /> 
                <Entypo name="star" size={20} color="#510094" />       
            </View>
        </View>
        <View style={styles.viewinfo}>
            <View style={styles.viewinfo2}>
                    <FontAwesome5 name="bed" size={16} color="#510094" /> 
                    <Text style={styles.text4}>3 habitaciones</Text>
            </View>
            <View style={styles.viewinfo2}>
                <FontAwesome5 name="bath" size={16} color="#510094" />   
                <Text style={styles.text4}>2 Baños</Text>
            </View>
            <View style={styles.viewinfo2}>
                <FontAwesome5 name="wifi" size={16} color="#510094" />    
                <Text style={styles.text4}>Wifi</Text>
            </View>
        </View>
        <View style={styles.viewinfotext}>
            <Text style={{color: "#a3a3a3", fontSize: 16, textAlign: "justify"}}>
                La ubicación de la casa es céntrica, cuenta con patio grande, espacio para mascota, cochera,y sala de juegos
                    <TouchableWithoutFeedback style={{ backgroundColor: 'red', width:30, height:30 }}>
                        <Text style={{color: "#eaff00", fontWeight:'bold', fontSize: 16, textAlign: "left", paddingLeft: 5}}>Ver mas...</Text>
                    </TouchableWithoutFeedback>
            </Text>
        </View>
        <View style={styles.viewinfoubi }>
                <TouchableWithoutFeedback style={styles.imageubi} onPress={ ()=> ubicacion() }>
                    <Image source={{uri: 'https://grijalvaromero.deskode.com/frumie/details/map.webp'}} 
                    style={{ height:200, resizeMode:'cover', borderRadius: 5 }}/>           
                </TouchableWithoutFeedback>
        </View>
        <View style={styles.viewinfo3}>
            <View style={styles.viewinfo2}>
                <Text style={{color: "#1d1d1d", fontWeight:'bold', fontSize: 30, textAlign: "left", paddingTop:5}}>$2000.00</Text>
                <Text style={{color: "gray", fontWeight:'bold', fontSize: 15, textAlign: "left", paddingTop:20}}>/mes </Text>
            </View>
            <View style={styles.viewRentar}>
                <TouchableWithoutFeedback style={styles.btnRentar} onPress={ ()=> cambiar() }>
                  <View style={{height: 35,width: 100,}}>
                    <Text style={{color: "white", fontSize: 20, textAlign: "center", paddingTop:7}}>Rentar</Text>         
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View style={{ height:70, }}>
            <Text style={{color: "#1d1d1d", fontSize: 35, textAlign: "left", paddingTop:17.5, paddingLeft:30}}>Comentarios</Text>
        </View>
        <View style={{height:50, paddingLeft:30, paddingRight:30 }}>
            <TextInput style={styles.txtIn} 
                      placeholder=" Agregar una pregunta/Comentario" />
                    
        </View>
        <FlatList
            data={data}
            keyExtractor={(item:any, index:number) => {return index.toString();}}
            renderItem={({ item }:any) => (
              <ItemCommentComponent data={item} navigation={navigation} />
            )}
          />
        <View style={{height:10}}></View>
            <View style={{height:50, padding:30}}>
            <TouchableWithoutFeedback style={{height:50}}>
                <View style={{backgroundColor:'#510094', height:50, borderRadius:5, }}>
                <Text style={{color: "white",marginTop:8, fontWeight:'bold', fontSize: 22, textAlign: "center"}}>Rentar</Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        <View style={{height:120}}></View>

    </View>

      
    );
 }