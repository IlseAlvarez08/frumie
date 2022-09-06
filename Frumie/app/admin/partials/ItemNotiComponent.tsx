import React from "react";
import { View,Text,StyleSheet,TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from '@expo/vector-icons';   
import { NavigationContainer } from '@react-navigation/native';
export default function ItemNotiComponent({ navigation,data }:any){
    const navigate = ()=>{ 
        console.log(1);
        
        navigation.navigate('PostView')
    }
    return (
        <TouchableWithoutFeedback style={styles.item} onPress={ () => navigate()}>
            <View style={styles.item}>
           
                <View style={styles.col}>
                    
                    <Text style={styles.title}><FontAwesome name="bell" size={18} color="#EEE" /> {data.title}</Text>
                    <Text style={styles.title}>{data.description}</Text>
                </View>
                <View style={styles.col}>
                    <Text style={{fontSize:12, color:'#6d6d6d'}}>{data.date}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
        
    )
}
const styles = StyleSheet.create({
    col:{
        padding:10
    },
    item: {
        flexDirection:'row',
        height: 70,
        justifyContent: 'space-between',
        marginVertical: 2,
        marginHorizontal: 2,
        padding: 5,
        backgroundColor:'white'
      },    
      title: {
        fontWeight:'300',
        fontSize: 14,
        color:"#4d4d4d"
      },
      date: {
        flex:1,
        justifyContent:'flex-end',
        fontSize: 10,
        color:"#6d6d6d",
        marginLeft:5
      },
  });