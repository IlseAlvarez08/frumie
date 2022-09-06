import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ComoComponent({navigation}) {
    const cambiar1 = ()=>{ 
        navigation.navigate('LoginA')
    }
    const cambiar2 = ()=>{ 
        navigation.navigate('LoginF')
    }
    return(
        <ImageBackground source={{uri:'https://www.xtrafondos.com/wallpapers/vertical/degradado-difuminado-morado-7944.jpg'}} 
        resizeMode="cover" style={styles.image}>
            <View  style={styles.view}>
            <Text style={styles.text1}>INICIAR COMO:</Text>
                <TouchableWithoutFeedback  onPress={ () => cambiar1()}>
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <FontAwesome name="home" size={70} color="#510094" style={{alignSelf:'center',marginTop:6}} />
                        </View>
                        <Text style={styles.text2}>Arrendador</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={ () => cambiar2()}>
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <MaterialIcons name="backpack" size={70} color="#510094" style={{alignSelf:'center', marginTop:5}} />
                        </View>
                        <Text style={styles.text2}>Arrendatario</Text>
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
        width:220,
        height:150,
        margin:30, 
    },
    view3:{
        alignSelf:'center',
        width:80,
        height:80,
        backgroundColor:'white',
        borderRadius:70
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

})