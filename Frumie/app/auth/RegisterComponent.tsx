

import {  Text, View,StyleSheet,TouchableWithoutFeedback, Dimensions, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ItemCommentComponent from "../partials/ItemCommentComponent";
import PagerView from 'react-native-pager-view';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterComponent({navigation}:any) {

      const cambiar = ()=>{ 
        navigation.navigate('Login')
       }
    return (
    <View>
       <View style={{ height: Dimensions.get('screen').height,borderRadius:20}}>
                <View style={styles.btnRegreso}>
                    <TouchableWithoutFeedback  onPress={ ()=> cambiar() }>
                        <Ionicons name="arrow-back-circle-sharp" size={50} color="#510094" />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1 }}>
                  <PagerView style={styles.viewPager} initialPage={0}>
                    <View style={styles.page} key="1" >
                       <View style={{ flex:1}}>
                            <View style={{alignItems:'center'}}>
                                        <Text style={styles.text1}>FRUMIE</Text>
                                        <Text style={styles.text1}>Crear Cuenta</Text>
                            </View>
                            <Image 
                                    style={{ width:300, height:300, marginTop:20}}
                                    source={{uri:'https://grijalvaromero.deskode.com/frumie/home1.png'}}  />
                             <TouchableWithoutFeedback  onPress={ () => cambiar()}>
                                <View style={styles.view2}>
                                    <View style={styles.view3}>
                                        <Text style={styles.textbtn}>Continuar como estudiante</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                       </View>
                    </View>
                    <View style={styles.page} key="2" >
                       <View style={{ flex:1}}>
                            <View style={{alignItems:'center'}}>
                                        <Text style={styles.text1}>FRUMIE</Text>
                                        <Text style={styles.text1}>Crear Cuenta</Text>
                            </View>
                            <Image 
                                    style={{ width:300, height:300, marginTop:20}}
                                    source={{uri:'https://grijalvaromero.deskode.com/frumie/home2.png'}}  />
                             <TouchableWithoutFeedback  onPress={ () => cambiar()}>
                                <View style={styles.view2}>
                                    <View style={styles.view3}>
                                        <Text style={styles.textbtn}>Continuar como arrendador</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                       </View>
                    </View>
                   
                  </PagerView>
                </View>
              </View>
    </View>

      
    );
 }
 const styles = StyleSheet.create({
    btnRegreso: {
        width:50,
        height:50,
        position: 'absolute',
        top:60,
        left:10,
        zIndex:2

      },
      viewPager: {
        flex: 1,
        
      },
      page: {
        alignSelf:'center',
        paddingTop:200,
        flexDirection:'column',
        alignItems:'center',
        
      },
      text1: {
        color: "#1d1d1d",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
      },
      view2:{
        alignSelf:'center',
        width:300,
        height:150,
        margin:30, 
    },
    view3:{
        alignSelf:'center',
        width:250,
        height:40,
        backgroundColor:'#510094',
        borderRadius:5, 
        marginTop: 20,
        paddingTop:10
        
    },
    textbtn: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        textAlignVertical: "center",
      },
 })