import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, ScrollView } from 'react-native';
import  HeaderComponent from '../../views/layouts/header/HeaderComponent';
import BarraComponent from '../components/barra/BarraComponent';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function UserComponent ({navigation}){
    const cambiar = ()=>{ 
        navigation.navigate('Details')
       }
       const home = ()=>{ 
        navigation.navigate('HomeF')
       }
       
       
       return (
       <View style={styles.container}>
        <ScrollView>
        <HeaderComponent navigation={navigation} />
        
            <View style={styles.view1}>
                <View style={styles.viewcarga}>
                <Image source={{ uri:'https://grijalvaromero.deskode.com/frumie/progress.png' }} 
                  style={{ width:200, height:200, paddingBottom: 50,}}/>
                  <View style={{flex:1, backgroundColor:'red', width:200, height:50, borderRadius:5}}></View>
             
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text1}>Calle Juárez #2500</Text>
                    <Text style={styles.text2}>Col. Centro</Text>
                    <Text style={styles.text3}>$2000.00 mxn</Text>
                </View>
            </View>
            <View style={styles.viewBtn}>
              <View style={styles.viewRentar}>
              <TouchableWithoutFeedback style={styles.btnRentar} onPress={ ()=> cambiar() }>
                    <View style={{height: 50,width: 480,}}>
                      <Text style={{color: "white", fontSize: 28, textAlign: "center", paddingTop:5, fontWeight:'bold'}}>Rentar</Text>         
                    </View>
                  </TouchableWithoutFeedback>
              </View>
            </View>
           <View style={styles.viewServicios}>
                <View style={styles.viewTit}>
                  <Text style={{color:"black", fontSize:30, textAlign: 'left', fontWeight:'bold' }}>Pago de Servicios</Text>
                </View>
                <View style={styles.btnsIcons}>
                      <View style={styles.viewIcon}>
                        <Octicons name="light-bulb" size={24} color="#510094" />
                        <Text style={styles.textIcon}>Electricidad</Text> 
                       </View> 
                       <View style={styles.viewIcon}>
                       <FontAwesome5 name="wifi" size={24} color="#510094" />
                        <Text style={styles.textIcon}>Wifi</Text> 
                       </View> 
                       <View style={styles.viewIcon}>
                       <Ionicons name="water-sharp" size={24} color="#510094" />
                        <Text style={styles.textIcon}>Agua</Text> 
                       </View> 
                       <View style={styles.viewIcon}>
                       <FontAwesome5 name="tv" size={24} color="#510094" />
                        <Text style={styles.textIcon}>TV</Text> 
                       </View> 
                       <View style={styles.viewIcon}>
                       <MaterialCommunityIcons name="gas-cylinder" size={24} color="#510094" />
                        <Text style={styles.textIcon}>Gas</Text> 
                       </View> 
                </View>
           </View>
           <View style={styles.viewPagos}>
                <View style={styles.viewTit2}>
                  <Text style={{color:"black", fontSize:30, textAlign: 'left', fontWeight:'bold' }}>Historial de Pagos</Text>
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 12/12/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/12/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/11/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/10/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/09/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/08/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/07/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
                </View>
                <View style={styles.btnsIconsPago}>
                      <View style={styles.viewIcon}>
                        <Feather name="check-square" size={40} color="#510094" />
                        <View>
                            <Text style={styles.textFechaP}>Pago 15/06/2021</Text> 
                            <Text style={styles.textPaypal}>Paypal</Text> 
                        </View>
                         </View> 
                      <View style={styles.viewIcon}>
                   </View> 
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
      backgroundColor: '#fff',
      flexDirection:'column'
    },
    view1:{
      flex:5,
      width:510,
      height: 200,
      paddingLeft:30,
      paddingRight:30,
      flexDirection:'row',
      position:'absolute',
      top:150,
      marginleft:100,
      borderRadius:20,
      alignSelf:'center', 
      alignContent:'center'
    },
    view12:{
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
    view2:{
        padding:50
    },
    viewcarga:{
      height:200,
      width:200,
      alignSelf:'center',
      alignContent:'center',
    },
    viewBtn:{
      height:50,
      width:470,
      top: 400,
      alignSelf:'center',  
      position:'absolute',   
      justifyContent:'space-between',
      flexDirection:'row'
    },
    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
      },
      text2: {
        color: "black",
        fontSize: 25,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
      },
      text3:{
      color: "black",
      fontSize: 35,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: "center",
      },
      textIcon:{
        color: "black",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
        paddingLeft: 4
        },
        textFechaP:{
          color: "black",
          fontSize: 18,
          fontWeight: "normal",
          textAlign: "center",
          textAlignVertical: "center",
          paddingLeft: 4
          },
          textPaypal:{
            color: "black",
            fontSize: 12,
            fontWeight: "normal",
            textAlign: "center",
            textAlignVertical: "center",
            paddingLeft: 4
            },
      btnRentar:{
        height: 50,
        width: 400,
        borderRadius:8,
        flex:2,
        textAlign:'center'
    },
    viewRentar:{
      height: 50,
      width: 480,
      borderRadius:8, 
      backgroundColor:'#510094',
      alignContent:'center',
      paddingTop:0

  },
  viewServicios:{
    width: 480,
    height:120,
    flexDirection:'column',
    top: 360,
    left: 50
  },
  viewPagos:{
    width: 480,
    height:200,
    top:340,
    flexDirection:'column',
    left: 50
  },
  viewTit:{
    width: 480,
    height:50
  },
  viewTit2:{
    width: 480,
    height:50
  },
  btnsIcons:{
    width: 480,
    height:70,
    flexDirection:'row'
  },
  viewIcon:{
    flexDirection: "row",
    justifyContent:'flex-start',
    alignContent:'center',
    paddingLeft: 25,
  },
  btnsIconsPago:{
    width: 480,
    height:70,
    flexDirection:'column'
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
  viewBtns:{
      height:50,
      width:50,
      alignSelf:'center',
    },
  });