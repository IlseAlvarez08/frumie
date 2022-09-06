import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
export default function HeaderComponent({navigation}) {

  const cambiar = ()=>{ 
    navigation.navigate('UserView')
   }
    return (
      <View style={styles.container}>
          <View style={styles.contenedorLogo}>
            <Image
              style={styles.tinyLogo} 
                source={{uri:'https://grijalvaromero.deskode.com/frumie/isotipo.png'}}
            />
            <Text style={styles.text}>Frumie</Text>
          </View>
        
            <View style={{width:50, height:50}}>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> cambiar() }>
                  <ImageBackground source={{ uri:'https://grijalvaromero.deskode.com/frumie/profile.png' }} 
                  style={{ width:50, height:50, paddingBottom: 50, borderRadius: 8 }}/>           
                </TouchableWithoutFeedback>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      backgroundColor: 'white',
      justifyContent: 'space-between',
      padding:20,
      paddingTop:30,
    },tinyLogo: {
      width: 50,
      height: 50,
    },isotipo: {
      width: 50,
      height: 50,
    },
    contenedorLogo:{
      flexDirection:"row",
    },
    text:{
      paddingLeft: 60,
      paddingTop: 10,
      fontSize:40,
      fontWeight:'bold'      
    },
    imageBtn: {
      height: 50,
      width: 50,
    },
  });
  