import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView } from 'react-native';
import BarraComponent from '../barra/BarraComponent';

import { Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function RoomieDetailsComponent({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const cambiar = ()=>{
    navigation.navigate('HomeF')
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
            <View>
        <TouchableWithoutFeedback onPress={ ()=> cambiar2() }>
        <ImageBackground 
          source={{uri:'https://grijalvaromero.deskode.com/frumie/fachada.png'}} 
          resizeMode="cover" style={styles.image} imageStyle={ { borderRadius: 25, height:310 } 
          }>
        <View style={styles.view}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                        <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiar() }>
                            <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.view4}>
                        <TouchableWithoutFeedback style={styles.btnPerfil} onPress={ ()=> cambiar3() }>
                            <ImageBackground
                                source={{uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'}}
                                resizeMode="cover" style={styles.imagePerfil} imageStyle={{ borderRadius:190 }}
                            />
                        </TouchableWithoutFeedback>            
                </View>
          </View>
          
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
      </View>
      <View style={styles.viewInfo}>
          <View style={styles.infoUsuario}>
          <Text style={{color: "black", fontSize: 30, textAlign: "center", fontWeight:'bold'}}>
              Esmeralda Vega Salazar
          </Text>
            <Text style={{color: "black", fontSize: 22, textAlign: "justify"}}>
              21 años<br/>
              Me gusta hacer deporte<br/>
              Estudio en el ITSNCG en el turno vespertino<br/>
          </Text>
        </View>
        <View style={styles.infoCasa}>
          <Text style={{color: "black", fontSize: 22, textAlign: "justify"}}>
              La casa cuenta con 3 cuartos, 2 baños completos, 1 sala, 1 cocina, 1 comedor y patio grande<br/>
              La casa esta semiamueblada<br/>
              Se encuentra cerca del parque central
          </Text>
        </View>
        <View style={styles.direccion}>
          <Text style={{color: "black", fontSize: 22, textAlign: "center"}}>
                Av. Benito Juárez y 16 de Septiembre s/n
            </Text>
          <TouchableWithoutFeedback style={styles.imageubi} onPress={ ()=> ubicacion() }>
              <Image source={{ uri:'https://img.freepik.com/vector-gratis/navegacion-aplicacion-hay-destino-llegar-al-mapa-gps-destino_403715-36.jpg?w=2000' }} 
              style={{ height:200, resizeMode:'cover', borderRadius: 12 }}/>           
          </TouchableWithoutFeedback>

        </View>
        <View style={styles.fotos}>
          <ScrollView style={styles.scrollHorizontal}>

          </ScrollView>

        </View>
        <View style={styles.roomie}>

        </View>
        <View style={styles.contactar}>

        </View>
    </View>

      </ScrollView>
      <BarraComponent navigation={navigation} idUser={1} />
    </View>

      
    );
 }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor:'#510094',
    }, 
      image: {
      margin:20,
      height:320,
      justifyContent: "center",
      padding: 25,
      borderRadius:25,
      borderColor:'white',
      borderWidth:5
    },
    imagePerfil:{
        width:190,
        height:190,

    },
    view: {
      paddingTop:0,

    },
    view2: {
      flexDirection: "column",
      justifyContent:'flex-start',
      marginTop: 0,
    },
    view3: {
      marginTop:110,      
      width:60,
      height:60,
    },
    view4: {
      width:200,
      height:200,  
      marginTop:120,
      alignContent:'center',
      borderRadius:200,
      borderColor:'white',
      borderWidth:5,
      alignSelf:'center',
    },
    view5: {
      paddingBottom:10,
      borderRadius: 25
    },
    viewInfo:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      width:"88%",
      height:"100%",
      margin:20,
      marginTop:70,
      borderRadius:25,
      backgroundColor:'white',
    },
    infoUsuario:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:300,
      width:"90%",
      margin:20,
      backgroundColor:'blue',
    },
    infoCasa:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:300,
      width:"90%",
      margin:20,
      backgroundColor:'red'
    },
    direccion:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:400,
      width:"90%",
      margin:20,
      backgroundColor:'red',
    },    
    fotos:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:300,
      width:"90%",
      margin:20,
      backgroundColor:'red',
    },
    roomie:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:300,
      width:"90%",
      margin:20,
      backgroundColor:'red',
    },
    contactar:{
      flex:1,
      alignSelf:'center',
      flexDirection:'column',
      height:80,
      width:"90%",
      margin:20,
      backgroundColor:'red',
    },
    btnPerfil:{
        width:190,
        height:190,
        alignSelf:'center'
    },
    imageCora:{
      height: 50,
      width: 50,
      backgroundColor:'#000000AA',
      borderRadius:50 
      },  
    text1: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      textAlignVertical: "center",
      backgroundColor: "#000000c0"
    },
    text2: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "left",
      textAlignVertical: "center",
      backgroundColor: "#000000c0"
    },
    text3:{
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    },
    text4:{
      color: "black",
      fontSize: 20,
      textAlign: "left",
      paddingLeft: 5
    },
    imageBtn: {
      height: 50,
      width: 50,
      backgroundColor: 'red',
      marginEnd: 10,
    },
    btnRegreso: {
    marginTop:200,
      height: 50,
      width: 50,
      backgroundColor:'red'
    },
    viewinfo:{
      height: 50,
      padding:30,
      paddingTop:0,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignContent:'center',
    },
    viewinfo2:{
      flexDirection: "row",
      justifyContent: 'space-between',
      alignContent:'center',
    },
    viewinfoubi:{
      height: 200,
      padding:30,
      paddingTop:0,
    },
    viewinfotext:{
      height: 135,
      padding:30,
      paddingTop:0,
    },
    estrellas:{
      flexDirection: "row",
      alignContent:'center',
      paddingTop: 15
    },
    imageubi:{
      height:150,
      width:150,

    },
    view1:{
      flex:1,
      height: 50,
      width: 510,
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
    },
    scrollHorizontal:{
      flex:1,
      height:"100%",
      
    }

    })