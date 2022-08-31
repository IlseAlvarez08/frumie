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
        navigation.navigate('Foto4')
        } 


    return (
      <View style={styles.container}>
        <ScrollView style={{height: windowHeight-50}}>
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
                        <TouchableWithoutFeedback style={styles.btnPerfil}>
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
      justifyContent: 'space-between',
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
      marginLeft:150,
      alignContent:'center',
      borderRadius:200,
      borderColor:'white',
      borderWidth:5,
    },
    view5: {
      paddingBottom:10,
      borderRadius: 25
    },
    viewInfo:{
        height:500,
        margin:20,
        marginTop:70,
        borderRadius:25,
        backgroundColor:'white',
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
    }

    })