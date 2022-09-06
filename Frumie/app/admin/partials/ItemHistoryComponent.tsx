import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';   
export default function ItemHistoryComponent({ data }:any){
    return (
        <View style={styles.item}>
            <View style={styles.col}>
                <FontAwesome name="arrow-down" size={18} color="#3c1c5d" /> 
            </View>
            <View style={styles.col}>
                <Text style={styles.title}>
                        {data.title} - 
                        <Text style={styles.date}>{data.date}</Text>
                </Text>
                <Text style={styles.title}>{data.details}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    col:{
        padding:5,
        paddingTop:10,
    },
    item: {
        flexDirection: "row",
        height: 60,
        justifyContent: "flex-start",
        padding: 5,
        borderTopColor: "#fcfcfc",
        borderTopWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
      },    
      title: {
        
        fontSize: 16,
        color:"#525252"
      },
      date: {
        flex:1,
        justifyContent:'flex-end',
        fontSize: 10,
        color:"#6d6d6d"
      },
  });