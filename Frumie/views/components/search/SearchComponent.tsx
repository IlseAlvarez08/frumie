import { StyleSheet, Text, View, Image,  TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchComponent() {
    return (
        <View style={styles.container}>
            <View>
              <View style={styles.view}>
                <Text>Ubicación</Text>
                <AntDesign name="down" size={15} color="#510094" />
              </View>
              <View style={styles.view}>
                  <Entypo name="location-pin" size={24} color="#510094" />
                <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Nuevo Casas Grandes</Text>
                
                  
              </View>

            </View>
            <View style={styles.view}>               
                <TextInput style={styles.txtIn} 
                  placeholder="     Buscar Casa" 
                />
                <TouchableWithoutFeedback style={styles.btnSearch}>
                    <FontAwesome name="search" size={35} color="#510094" style={{ padding:7.5 }}/>
                </TouchableWithoutFeedback>
            </View>
          </View>
      );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  view:{
    flexDirection: "row",

  },
  txtIn: {
    height:50,
    flex:1,
    borderWidth:1,
    borderRadius: 15
  },
  btnSearch:{
    height:50,
    width:50,
    alignContent:'center'

  },
});