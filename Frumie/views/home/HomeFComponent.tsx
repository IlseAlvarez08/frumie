import { StyleSheet, Text, View, Image,  TextInput, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import BarraComponent from '../components/barra/BarraComponent';
import RoomieComponent from '../components/roomieComponent/RoomieComponent';

import  HeaderComponent from '../layouts/header/HeaderComponent';
import  SearchComponent from '../components/search/SearchComponent';
import  HouseItem from '../components/houseItem/HouseComponent';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function HomeFComponent({navigation}) {

  const cambiar = ()=>{ 
    navigation.navigate('Home')
   }

    return (<View style={styles.container}>
        <HeaderComponent navigation={navigation} />
        <SearchComponent/>
          <ScrollView>
            <Text style={{ color: "black", fontSize: 40, fontWeight: "bold", textAlign: "center"}}>HOLA ARRENDADOR</Text>
            <HouseItem navigation={navigation} url={"https://grijalvaromero.deskode.com/frumie/fachada.png"} />
            <RoomieComponent navigation={navigation} url={"https://buscoroomie.cl/media/blog/pictures/COMPARTIR.jpg"} />
            <HouseItem navigation={navigation}url={"https://grijalvaromero.deskode.com/frumie/fachada_bw.png"} />
            <HouseItem navigation={navigation}url={"https://grijalvaromero.deskode.com/frumie/fachada_ck.png"} />
            <RoomieComponent navigation={navigation} url={"https://media.informabtl.com/wp-content/uploads/2020/12/1c9cd7ca-bigstock-two-happy-roommates-moving-hom-298309441.jpg"} />
            <HouseItem navigation={navigation}url={"https://grijalvaromero.deskode.com/frumie/fachada.png"} />
            <RoomieComponent navigation={navigation} url={"https://i2.wp.com/www.oinkoink.com.mx/wp-content/uploads/2022/04/roomies.jpg?fit=1280%2C720&ssl=1"} />
            <RoomieComponent navigation={navigation} url={"http://static.pulzo.com/images/20161024094752/istock_70129951_medium-914x607.jpg?itok=1477321016"} />
            <HouseItem navigation={navigation} url={"https://grijalvaromero.deskode.com/frumie/fachada.png"} />

          
        </ScrollView>
        <BarraComponent navigation={navigation} idUser={1} />
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    view1:{
      flex:1,
      width:510,
      height: 50,
      paddingLeft:30,
      paddingRight:30,
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
    
  });