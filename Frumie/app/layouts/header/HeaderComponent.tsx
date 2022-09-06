import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
export default function HeaderComponent({navigation}:any) {

  const cambiar = ()=>{ 
    navigation.navigate('Login')
   }
   const cambiar2 = ()=>{
    navigation.navigate('Nested Navigator 2', { screen: 'screen D' });
   }
    return (
      <View style={styles.container}>
          <View style={styles.contenedorLogo}>
            <Image
              style={styles.tinyLogo} 
                source={{uri: 'https://grijalvaromero.deskode.com/frumie/isotipo.png'}}
            />
           
          </View>
         <Text style={styles.text}>Frumie</Text>
            <View style={styles.imageBtn}>
                <TouchableWithoutFeedback style={styles.imageBtn} onPress={ ()=> cambiar() }>
                  <Image source={{uri: 'https://grijalvaromero.deskode.com/frumie/default.jpg'}} 
                    style={{ width:50, height:50, borderRadius: 25 }}/>           
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
    },
    tinyLogo: {
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
      
      paddingTop: 10,
      fontSize:35,
      fontWeight:'bold',
      color:'#1d1d1d'      
    },
    imageBtn: {
      height: 50,
      width: 50,
    },
  });
  