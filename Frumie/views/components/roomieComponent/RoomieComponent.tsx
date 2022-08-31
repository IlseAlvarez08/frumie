import { StyleSheet, Text, Image,View, ImageBackground, Button, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MaterialIcons } from '@expo/vector-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Entypo } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';


export default function RoomieComponent({navigation, url}){

  const cambiar = ()=>{ 
    navigation.navigate('RoomieDetails')
   }

    return (
        <TouchableWithoutFeedback onPress={ () => cambiar()}>
          
        <ImageBackground 
           source={{uri:url}} 
           resizeMode="cover" style={styles.image} imageStyle={ { borderRadius: 25 } 
           }>
             <View style={{backgroundColor:'#d7cb06', borderRadius:70, height:70, width:70, bottom:45, alignSelf:'flex-end' }}>
                <MaterialIcons name="emoji-people" size={50} color="black" style={{ alignSelf:'center', paddingTop:10 }}/>
             </View>            

          <View style={styles.view}>
            <View>
              <Text style={styles.text1}>¡Busco Roomie!</Text>
              <Text style={styles.text2}>Que estudie en el ITSNCG</Text>
              <Text style={styles.text2}>No mascotas</Text>
            </View>
            <View>
                <TouchableWithoutFeedback>
                  <View style={styles.heart}>
                     <AntDesign name="heart" size={20 } color="white" />
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>
   </TouchableWithoutFeedback>     
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
    padding: 0
  },
  containerImg: {
    margin:20,
    height:320,
    justifyContent: "center",
    padding: 25
  },
  view: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingLeft:20,
    marginRight:20,
    marginTop:150
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
  imageBtn: {
    height: 50,
    width: 50
  },
  heart: {
    height: 40,
    width: 40,
    backgroundColor:'#000000AA',
    borderRadius: 30,
    alignItems:'center',
    padding:10
  }
  })