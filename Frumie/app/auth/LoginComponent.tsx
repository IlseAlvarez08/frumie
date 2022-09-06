import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
export default function LoginComponent({navigation}:any) {
    const [userName, setUserName] = useState('');
    const cambiar = ()=>{ 
        console.log(userName)
        if(userName == 'admin'){
            navigation.navigate('AdminView')
        }else{
            navigation.navigate('HomeRoutes')
        }
       
    }
    const cambiar2=()=>{
        navigation.navigate('Register')
    }
    return(
        
            <View  style={styles.view}>
               <View style={{alignItems:'center'}}>
                        <Text style={styles.text1}>FRUMIE</Text>
                        <Text style={styles.text1}>Bienvenido de vuelta</Text>
               </View>
                
                <View style={styles.view2}>
                    <Text style={styles.text2}>Usuario:</Text>
                    <TextInput maxLength={30} style={styles.input} placeholder='Ingrese su usario' 
                        onChangeText={newText => setUserName(newText)}
                        defaultValue={userName}/>
                    <Text style={styles.text2}>Contraseña:</Text>
                    <TextInput maxLength={30} style={styles.input} secureTextEntry={true} placeholder='Ingrese su contraseña'/>
                    
                </View>
                <TouchableWithoutFeedback  onPress={ () => cambiar()}>
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.textbtn}>Ingresar</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.logIn} onPress={ () => cambiar2()}>
                    <Text style={styles.links}>Crear Cuenta</Text>
                </TouchableWithoutFeedback>
                <View style={styles.js}>
                    <View style={styles.card}>
                        <View><Entypo name="google--with-circle" size={15} color="#510094" /></View>
                        <Text style={{color:'#a3a3a3'}}>Google</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Entypo name="facebook" size={15} color="#510094" /></View>
                        <Text style={{color:'#a3a3a3'}}>Facebook</Text>
                    </View>
                    <View style={styles.card}>
                        <View><Entypo name="mail" size={15} color="#510094" /></View>
                        <Text style={{color:'#a3a3a3'}}>Email</Text>
                    </View>

                </View>
            </View>
            
    );

}
const styles = StyleSheet.create({
   
    view:{
        margin:50,
        alignSelf:'center',
        width:400,
        height:400,
        flexDirection:'column',
        top:100,
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
        marginTop: 50,
        paddingTop:10
        
    },
    text1: {
        color: "#1d1d1d",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
      },
      text2: {
        color: "#1d1d1d",
        fontSize: 20,
        marginTop:10,
        fontWeight: "bold",
        textAlignVertical: "center",
      },
      textbtn: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        textAlignVertical: "center",
      },
      input:{
        width:300, 
        height:50, 
        backgroundColor:'white', 
        borderRadius:5,
        borderColor:'#FCFCFC',
        padding:5,
        color:'#6d6d6d'

        },
    logIn: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 10,
        },
    links: {
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#1d1d1d",
    },
    js: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
    },
    
    card:{
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        height:40
    },

})