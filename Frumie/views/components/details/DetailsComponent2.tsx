import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, FontAwesomeIcon, ScrollView,TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




export default function DetailsComponent2({navigation}) {

  const cambiar = ()=>{ 
    navigation.navigate('HomeF')
   }
   const ubicacion = ()=>{
       navigation.navigate('ubicacion')
   }


    return (
      <View>
        <View style={styles.viewinfo}>
            <Text style={styles.text3}>Descripción</Text>
            <View style={styles.estrellas}>
                <Entypo name="star" size={30} color="#510094" /> 
                <Entypo name="star" size={30} color="#510094" /> 
                <Entypo name="star" size={30} color="#510094" /> 
                <Entypo name="star" size={30} color="#510094" /> 
                <Entypo name="star" size={30} color="#510094" />       
            </View>
        </View>
        <View style={styles.viewinfo}>
        <View style={styles.viewinfo2}>
                <FontAwesome5 name="bed" size={25} color="#510094" /> 
                <Text style={styles.text4}>3 habitaciones</Text>
        </View>
        <View style={styles.viewinfo2}>
              <FontAwesome5 name="bath" size={25} color="#510094" />   
              <Text style={styles.text4}>2 Baños</Text>
        </View>
        <View style={styles.viewinfo2}>
              <FontAwesome5 name="wifi" size={25} color="#510094" />    
            <Text style={styles.text4}>Wifi</Text>
        </View>
        </View>
        <View style={styles.viewinfotext}>
        <Text style={{color: "black", fontSize: 22, textAlign: "justify"}}>
            La ubicación de la casa es céntrica, cuenta con patio grande, espacio para mascota, cochera,y sala de juegos
                <TouchableWithoutFeedback style={{ backgroundColor: 'red', width:30, height:30 }}>
                    <Text style={{color: "#eaff00", fontWeight:'bold', fontSize: 22, textAlign: "left", paddingLeft: 5}}>Ver mas...</Text>
                </TouchableWithoutFeedback>
        </Text>
        </View>
        <View style={styles.viewinfoubi }>
                <TouchableWithoutFeedback style={styles.imageubi} onPress={ ()=> ubicacion() }>
                    <Image source={{ uri:'https://img.freepik.com/vector-gratis/navegacion-aplicacion-hay-destino-llegar-al-mapa-gps-destino_403715-36.jpg?w=2000' }} 
                    style={{ height:200, resizeMode:'cover', borderRadius: 12 }}/>           
                </TouchableWithoutFeedback>
        </View>
        <View style={styles.viewinfo3}>
            <View style={styles.viewinfo2}>
                <Text style={{color: "black", fontWeight:'bold', fontSize: 30, textAlign: "left", paddingTop:5}}>$2000.00</Text>
                <Text style={{color: "gray", fontWeight:'bold', fontSize: 15, textAlign: "left", paddingTop:20}}>/mes </Text>
            </View>
            <View style={styles.viewRentar}>
                <TouchableWithoutFeedback style={styles.btnRentar} onPress={ ()=> cambiar() }>
                  <View style={{height: 50,width: 100,}}>
                    <Text style={{color: "white", fontSize: 25, textAlign: "center", paddingTop:7}}>Rentar</Text>         
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View style={{ height:70, }}>
            <Text style={{color: "Black", fontSize: 35, textAlign: "left", paddingTop:17.5, paddingLeft:30}}>Comentarios</Text>
        </View>
        <View style={{height:50, paddingLeft:30, paddingRight:30 }}>
            <TextInput style={styles.txtIn} 
                      placeholder="     Agregar una pregunta/Comentario" 
                    
                    />
                    
        </View>
        <View style={styles.cajaCom}>
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{height:30, width:30,}}>
                          <Image style={styles.isotipo}
                          source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                      />
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Ilse Alvarez Pereyra</Text>
                  </View>
                </View>
                <View style={{ }}>
                  <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                </View>   
                          
            </View>
            <View style={{height:5}}></View>
            <View style={{paddingLeft:30}}><Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                ¿Cuenta con instalación de Gas Natural?              
            </Text></View>
            <View style={{height:15}}></View> 
        </View>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:25, width:30}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{height:30, width:30,}}>
                            <Image style={styles.isotipo}
                            source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                        />
                    </View>
                    <View>
                      <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Juan Perez</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                  </View>              
                </View>

            </View>
            <View style={{height:5}}></View>
            <View style={{flexDirection:'row', paddingLeft:15}}>
            <View style={{height:25, width:40}}></View>
            <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                Por el momento no cuenta con instalación de Gas Natural              
            </Text></View>
            </View>
            
        </View>
        <View style={styles.cajaCom}>
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{height:30, width:30,}}>
                          <Image style={styles.isotipo}
                          source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                      />
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Ilse Alvarez Pereyra</Text>
                  </View>
                </View>
                <View style={{ }}>
                  <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                </View>   
                          
            </View>
            <View style={{height:5}}></View>
            <View style={{paddingLeft:30}}><Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                ¿Cuenta con instalación de Gas Natural?              
            </Text></View>
            <View style={{height:15}}></View> 
        </View>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:25, width:30}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{height:30, width:30,}}>
                            <Image style={styles.isotipo}
                            source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                        />
                    </View>
                    <View>
                      <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Juan Perez</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                  </View>              
                </View>

            </View>
            <View style={{height:5}}></View>
            <View style={{flexDirection:'row', paddingLeft:15}}>
            <View style={{height:25, width:40}}></View>
            <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                Por el momento no cuenta con instalación de Gas Natural              
            </Text></View>
            </View>
            
        </View>
        <View style={styles.cajaCom}>
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{height:30, width:30,}}>
                          <Image style={styles.isotipo}
                          source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                      />
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Ilse Alvarez Pereyra</Text>
                  </View>
                </View>
                <View style={{ }}>
                  <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                </View>   
                          
            </View>
            <View style={{height:5}}></View>
            <View style={{paddingLeft:30}}><Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                ¿Cuenta con instalación de Gas Natural?              
            </Text></View>
            <View style={{height:15}}></View> 
        </View>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:25, width:30}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{height:30, width:30,}}>
                            <Image style={styles.isotipo}
                            source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                        />
                    </View>
                    <View>
                      <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Juan Perez</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                  </View>              
                </View>

            </View>
            <View style={{height:5}}></View>
            <View style={{flexDirection:'row', paddingLeft:15}}>
            <View style={{height:25, width:40}}></View>
            <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                Por el momento no cuenta con instalación de Gas Natural              
            </Text></View>
            </View>
            
        </View>
        <View style={styles.cajaCom}>
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{height:30, width:30,}}>
                          <Image style={styles.isotipo}
                          source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                      />
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Ilse Alvarez Pereyra</Text>
                  </View>
                </View>
                <View style={{ }}>
                  <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                </View>   
                          
            </View>
            <View style={{height:5}}></View>
            <View style={{paddingLeft:30}}><Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                ¿Cuenta con instalación de Gas Natural?              
            </Text></View>
            <View style={{height:15}}></View> 
        </View>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:25, width:30}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{height:30, width:30,}}>
                            <Image style={styles.isotipo}
                            source={{uri:'https://grijalvaromero.deskode.com/frumie/profile.png'}}
                        />
                    </View>
                    <View>
                      <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>Juan Perez</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: "Black", fontSize: 15, textAlign: "left"}}>Justo ahora</Text>
                  </View>              
                </View>

            </View>
            <View style={{height:5}}></View>
            <View style={{flexDirection:'row', paddingLeft:15}}>
            <View style={{height:25, width:40}}></View>
            <Text style={{color: "Black", fontSize: 25, textAlign: "left"}}>
                Por el momento no cuenta con instalación de Gas Natural              
            </Text></View>
            </View>
            
        </View>
        <View style={{height:10}}></View>
        <View style={{height:50, padding:30}}>
          <TouchableWithoutFeedback style={{height:50}}>
            <View style={{backgroundColor:'#510094', height:50, borderRadius:12, }}>
              <Text style={{color: "white", fontWeight:'bold', fontSize: 35, textAlign: "center"}}>Rentar</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{height:120}}></View>

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
      paddingBottom: 0
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

    },
    imageBtn: {
      height: 50,
      width: 50,
      marginEnd: 10,
    },
    btnRegreso: {
      height: 50,
      width: 50,
      paddingBottom:100
    },
    viewinfo:{
      flex:1,
      height:"50%",
      width:"100%",
      padding:30,
      paddingTop:0,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignContent:'center', 
    },
    viewinfo2:{
      flexDirection: "row",
      alignContent:'center',
      alignItems:'center',
      flex:1,
      height:"50%",
      width:"20%",

    },
    viewinfo3:{
      height: 50,
      padding:30,
      paddingTop:20,
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
      alignSelf:'center',
      paddingTop: 10
    },
    imageubi:{
      height:150,
      width:150,

    },
    btnRentar:{
        height: 50,
        width: 100,
        borderRadius:8,
        flex:2
    },
    viewRentar:{
        height: 50,
        width: 100,
        borderRadius:8, 
        backgroundColor:'#510094',
        alignContent:'center',
        paddingTop:0

    },
    txtIn: {
      height:50,
      flex:1,
      borderWidth:1,
      borderRadius: 15
    },isotipo: {
      width: 30,
      height: 30,
    },
    cajaCom:{
      height:300,
      backgroundColor:'#00000022', 
      left:30, 
      marginRight:60, 
      marginTop:30, borderRadius:12, 
      flexDirection:'column'
    }

    })