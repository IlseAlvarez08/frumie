import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginFComponent({navigation}) {
    const cambiar = ()=>{ 
        navigation.navigate('HomeF')
    }
    return(
        <ImageBackground source={{uri:'https://www.xtrafondos.com/wallpapers/vertical/degradado-difuminado-morado-7944.jpg'}} 
        resizeMode="cover" style={styles.image}>
            <View  style={styles.view}>
            <Text style={styles.text1}>INICIAR SESIÓN</Text>
                    <View style={styles.view2}>
                        <Text style={styles.text2}>Usuario:</Text>
                        <TextInput maxLength={30} style={{width:300, height:50, backgroundColor:'white', borderRadius:20, }} placeholder='Ingrese su usario' />
                        <Text style={styles.text2}>Contraseña:</Text>
                        <TextInput maxLength={30} style={{width:300, height:50, backgroundColor:'white', borderRadius:20}} placeholder='Ingrese su contraseña'/>
                        
                    </View>
                <TouchableWithoutFeedback  onPress={ () => cambiar()}>
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.textbtn}>Ingresar</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    image: {
        marginLeft: 0,
        flex:1,
    },
    image2: {
        width:380,
        height:380,
        alignSelf:'center', 
        flex:1
    },
    btnInicio: {
        height: 80,
        width: 350,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:50,
    },
    view:{
        margin:50,
        alignSelf:'center',
        width:400,
        height:400,
        flexDirection:'column',
        top:100
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
        height:60,
        backgroundColor:'#510094',
        borderRadius:30, 
        marginTop: 50,
    },
    text1: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
      },
      text2: {
        color: "black",
        fontSize: 36,
        textAlign: "center",
        fontWeight: "bold",
        textAlignVertical: "center",
      },
      textbtn: {
        color:"white",
        fontSize: 36,
        textAlign: "center",
        fontWeight: "bold",
        textAlignVertical: "center",
      },

})