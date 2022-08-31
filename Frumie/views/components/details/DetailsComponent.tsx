import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView } from 'react-native';
import BarraComponent from '../barra/BarraComponent';

import DetailsComponent2 from './DetailsComponent2';
import { Ionicons } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Dimensions } from 'react-native';

export default function DetailsComponent({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const cambiar = ()=>{ 
    navigation.navigate('HomeF')
   }
  const foto1 = ()=>{
     navigation.navigate('Foto1')
  }
  const foto2 = ()=>{
    navigation.navigate('Foto2')
 }
 const foto3 = ()=>{
  navigation.navigate('Foto3')
}
const foto4 = ()=>{
  navigation.navigate('Foto4')
}

    return (
      <View>
        <ScrollView style={{height: windowHeight-50}}>
          <TouchableWithoutFeedback onPress={ ()=> foto4() }>
        <ImageBackground 
          source={{uri:'https://grijalvaromero.deskode.com/frumie/fachada.png'}} 
          resizeMode="cover" style={styles.image} imageStyle={ { borderRadius: 25 } 
          }>
        <View style={styles.view}>
          <View style={styles.view2}>
            <View style={styles.view3}>
                <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiar() }>
                    <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
                  </TouchableWithoutFeedback>
            </View>
            <View style={styles.view4}>
                <Text style={styles.text1}>Casa Habitacion (4 cuartos)</Text>
                <Text style={styles.text2}>Col. Centro, Nvo. Casas Grandes</Text>
                
            </View>
            
          </View>
          <View>
            <View style={styles.view5 }>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> foto1() }>
                  <Image source={{ uri:'https://i.pinimg.com/736x/c9/f0/16/c9f016f66b4f82bc4b927051f8c5eaf8--wallpaper-bookcase-book-wallpaper.jpg' }} 
                  style={{ width:50, height:50, paddingBottom: 50, borderRadius: 8 }}/>           
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.view5 }>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> foto2() }>
                  <Image source={{ uri:'https://www.xtrafondos.com/wallpapers/vertical/diseno-de-sala-de-estar-2547.jpg' }} 
                  style={{ width:50, height:50, paddingBottom: 50, borderRadius: 8 }}/>           
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.view6 }>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> foto3() }>
                  <Image source={{ uri:'https://i.pinimg.com/originals/5f/d4/67/5fd4672205dbbc1c3cb2a314ed122b0f.jpg' }} 
                  style={{ width:50, height:50, paddingBottom: 50, borderRadius: 8 }}/>           
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.imageCora }>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> cambiar() }>
                          <AntDesign name="heart" size={30} color="white" style={{ alignSelf:'center', paddingTop:10 }}/>       
                </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>

      <DetailsComponent2 navigation={navigation} idUser={1} />
      </ScrollView>
      <BarraComponent navigation={navigation} idUser={1} />
    </View>

      
    );
 }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: "aliceblue",
    }, 
      image: {
      margin:20,
      height:320,
      justifyContent: "center",
      padding: 25
    },
    view: {
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop:0,

    },
    view2: {
      flexDirection: "column",
      justifyContent: 'space-between',
      
      marginTop: 0
    },
    view3: {
      paddingTop:0,
      paddingBottom: 0,
      width:50,
    },
    view4: {
      paddingTop:150
    },
    view5: {
      paddingBottom:10,
      borderRadius: 25
    },
    view6:{
    paddingBottom:30,
    borderRadius: 25
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
      height: 50,
      width: 50,
      paddingBottom:100
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