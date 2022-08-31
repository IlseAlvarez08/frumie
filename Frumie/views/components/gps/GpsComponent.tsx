import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView } from 'react-native';
import HeaderComponent from '../../layouts/header/HeaderComponent';
import BarraComponent from '../barra/BarraComponent';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

export default function GpsComponent ({navigation}){
    const cambiar = ()=>{ 
        navigation.navigate('Details')
       }
       const home = ()=>{ 
        navigation.navigate('HomeF')
       }
       
       
       return (
        <ImageBackground source={{uri:'https://grijalvaromero.deskode.com/frumie/mapaFull.png'}} 
        resizeMode="cover" style={styles.image}>
        <ScrollView>
        <HeaderComponent navigation={navigation} />     
       
       </ScrollView>
       <View style={styles.viewBtns}>
          <Entypo name="location-pin" size={70} color="#510094" style={{ alignSelf:'center'}}/>
       </View>
       
        <BarraComponent navigation={navigation} />

     </ImageBackground>
        
       );
}
const styles = StyleSheet.create({
    image: {
      marginLeft: 0,
      flex:1,

  },
  viewBtns:{
    height:80,
    width:80,
    paddingTop:400,
    alignSelf:'center',  
    position:'absolute',   
    justifyContent:'space-between',
    flexDirection:'row'
  }
  });