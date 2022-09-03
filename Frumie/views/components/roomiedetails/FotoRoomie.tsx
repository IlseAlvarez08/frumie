import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function FotoRoomie({navigation}) {
    const cambiar = ()=>{ 
        navigation.navigate('RoomieDetails')
    }
    return(
        <ImageBackground source={{uri:'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'}} 
        resizeMode="cover" style={styles.image}>
            <View  style={styles.view}>
                <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiar() }>
                <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
                </TouchableWithoutFeedback>
            </View>
            
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    image: {
        flex:1,
        width:"100%",
        height:"100%"
    },
    btnRegreso: {
        height: 50,
        width: 50,
    },
    view:{
        paddingTop:30,
        paddingLeft:30,
    },
    view2:{
        paddingTop:320,
        padding:30,
        flexDirection: "row",
        justifyContent: 'space-between',
    }

})