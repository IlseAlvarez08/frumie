import { StyleSheet, Text, Image,View, ImageBackground, Button, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
export default function HouseItem({navigation, item}:any){

  const cambiar = ()=>{ 
    navigation.navigate('HouseDetailsView')
   }

    return (
        <TouchableWithoutFeedback onPress={ () => cambiar()}>
          
        <ImageBackground 
          //  source={{uri:item.url}} 
            source={ {uri: 'https://grijalvaromero.deskode.com/frumie/'+item.img }} 
           resizeMode="cover" style={styles.image} imageStyle={ { borderRadius: 25 } 
           }>
             <View style={{backgroundColor:'#510094', borderRadius:25, height:40, width:40, bottom:40, alignSelf:'flex-end' }}>
                <Entypo name="home" size={18} color="#ffffff" style={{ alignSelf:'center', paddingTop:10 }}/>
             </View>          

          <View style={styles.view}>
            <View>
              <Text style={styles.text1}>{ item.title }</Text>
              <Text style={styles.text2}>{item.address}</Text>
            </View>
            <View>
                <TouchableWithoutFeedback>
                  <View style={styles.heart}>
                     <AntDesign name="heart" size={20 } color="white" />
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>
   </TouchableWithoutFeedback>     
            );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    zIndex:1
  }, 
    image: {
    margin:20,
    height:320,
    justifyContent: "center",
    padding: 0, 
    zIndex:1
    
  },
  containerImg: {
    margin:20,
    height:50,
    justifyContent: "center",
    padding: 25,
    zIndex:1
  },
  view: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingLeft:20,
    marginRight:20,
    marginTop:150, 
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
  imageBtn: {
    height: 50,
    width: 50
  },
  heart: {
    height: 40,
    width: 40,
    backgroundColor:'#000000AA',
    borderRadius: 30,
    alignItems:'center',
    padding:10
  }
  })