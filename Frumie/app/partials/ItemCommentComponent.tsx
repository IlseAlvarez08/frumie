import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';   

export default function ItemCommentComponent({ data }:any){
    return (
        <View style={styles.cajaCom}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                    <View style={{flexDirection:'row',}}>
                        <View style={{height:30, width:30,}}>
                            <Image source={require('../../assets/default.jpg')} 
                                 style={{ width:26, height:26, borderRadius: 13 }}/>
                        </View>
                        <View>
                            <Text style={{color: "#1d1d1d", fontSize: 16, textAlign: "left"}}>{ data.question.name }</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color: "#a3a3a3", fontSize: 12, textAlign:'right'}}>{ data.question.date }</Text>
                    </View>   
                            
                </View>
                <View style={{paddingLeft:30}}>
                    <Text style={{color: "#a3a3a3", fontSize: 14, textAlign: "left"}}>
                    { data.question.text }        
                    </Text>
                </View>
                </View>
            <View style={{flexDirection:'column',paddingTop:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{height:25, width:30}}></View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:30, width:30,}}>
                                <Image source={require('../../assets/default.jpg')} 
                                style={{ width:26, height:26, borderRadius: 13 }}/>
                            </View>
                        <View>
                            <Text style={{color: "#1d1d1d", fontSize: 16,}}>{ data.response.name }</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color: "#a3a3a3", fontSize: 12, }}>{ data.response.date }</Text>
                    </View>              
                    </View>

                </View>
                <View style={{height:5}}></View>
                    <View style={{flexDirection:'row', paddingLeft:15}}>
                        <View style={{height:25, width:40}}></View>
                            <Text style={{color: "#a3a3a3", fontSize: 14, textAlign: "left"}}>
                            { data.response.text }    
                            </Text>
                        </View>
                </View>
                
    </View>
    )
}
const styles = StyleSheet.create({
   
      date: {
        flex:1,
        justifyContent:'flex-end',
        fontSize: 10,
        color:"#6d6d6d"
      },
      cajaCom: {
        height: 160,
        backgroundColor: "#FFF",
        left: 30,
        marginRight: 60,
        marginTop: 30,
        borderRadius: 12,
        flexDirection: "column",
        padding:20
      },
  });