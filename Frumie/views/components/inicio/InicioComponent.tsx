import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function InicioComponent({navigation}) {
    const cambiar = ()=>{ 
        navigation.navigate('How')
    }
    return(
        <ImageBackground source={{uri:'https://www.xtrafondos.com/wallpapers/vertical/degradado-difuminado-morado-7944.jpg'}} 
        resizeMode="cover" style={styles.image}>
            <View  style={styles.view}>
                    <View style={styles.view2}>
                        <ImageBackground source={{uri:'https://grijalvaromero.deskode.com/frumie/isotipo.png'}} 
                            resizeMode="cover" style={styles.image2}>
                    </ImageBackground>
                    </View>
                    <View style={styles.view3}>
                        <TouchableWithoutFeedback  onPress={ () => cambiar()}>
                            <View  style={styles.btnInicio}>
                                <Text style={styles.text1}>INICIO</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
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
        flex:1, 
        
    },
    btnInicio: {
        height: 80,
        width: 350,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:50,
    },
    view:{
        marginTop:170,
        alignSelf:'center',
        width:400,
        height:600,
        flexDirection:'column'
    },
    view2:{
        alignSelf:'center',
        width:400,
        height:400
    },
    view3:{
        alignSelf:'center',
        width:400,
        height:200
    },
    text1: {
        color: "black",
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
      },

})