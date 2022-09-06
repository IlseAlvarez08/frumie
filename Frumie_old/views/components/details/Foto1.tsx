import { StyleSheet, Text, View, Image,ImageBackground,TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Foto1({navigation}) {
    const cambiar = ()=>{ 
        navigation.navigate('Details')
    }
    const cambiarFS = ()=>{ 
        navigation.navigate('Foto2')
    }
    const cambiarFA = ()=>{ 
        navigation.navigate('Foto4')
    }
    return(
        <ImageBackground source={{uri:'https://i.pinimg.com/736x/c9/f0/16/c9f016f66b4f82bc4b927051f8c5eaf8--wallpaper-bookcase-book-wallpaper.jpg'}} 
        resizeMode="cover" style={styles.image}>
            <View  style={styles.view}>
                <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiar() }>
                <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.view2}>
                <View>
                    <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiarFS() }>
                    <AntDesign name="leftcircle" size={40} color="white" />
                    </TouchableWithoutFeedback>
                </View>
                <View>
                <TouchableWithoutFeedback style={styles.btnRegreso} onPress={ ()=> cambiarFA() }>
                <AntDesign name="rightcircle" size={40} color="white" />
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