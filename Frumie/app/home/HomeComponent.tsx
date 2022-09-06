import { StyleSheet, FlatList, View,  TextInput, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import NavComponent from '../layouts/nav/NavComponent';
import RoomieComponent from '../partials/roomieComponent/RoomieComponent';
import  HeaderComponent from '../layouts/header/HeaderComponent';
import SearchComponent from '../layouts/search/SearchComponent';
import HouseItem from '../partials/houseItem/HouseComponent';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';


export default function HomeComponent({navigation}:any) {
  const [data,setData]= useState([ ]) as any
  let data2:any =[{ 
    id:1,
    type:'house',img:'fachada.png',
    title:'Casa Habitacion (4 cuartos)',address:'Col. Centro, Nvo. Casas Grandes'
  },
  { 
    id:2,
    type:'rommie',img:'compartir.jpg',
    title:'¡Busco Roomie!',address:'Que estudie en el ITSNCG'
  },
  { 
    id:3,
    type:'house',img:'fachada_bw.png',
    title:'Casa Habitacion (4 cuartos)',address:'Col. Centro, Nvo. Casas Grandes'
  },
  { 
    id:4,
    type:'house',img:'fachada_ck.png',
    title:'Casa Habitacion (4 cuartos)',address:'Col. Centro, Nvo. Casas Grandes'
  }
]
  useEffect(()=>{
   // getdata()
  })
  let getdata = ()=>{
    setData([
     
    ])
  }
    return (<View style={styles.container}>
        <HeaderComponent navigation={navigation} />
        <SearchComponent/>
      
        <ScrollView style={{marginTop:60}}>
        
          
          {
            data2.map( (item:any,index:number)=>{
              return (<View  key={"view_"+index} >
                {item.type == "house"  &&(
                  <HouseItem navigation={navigation} item={item} key={"item_"+index} />
                )}
                {item.type == "rommie"  &&(
                  <RoomieComponent navigation={navigation}  item={item}  key={"item_"+index} />
                )}
              </View>)
             
            })
          }
          
        </ScrollView>
    
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
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