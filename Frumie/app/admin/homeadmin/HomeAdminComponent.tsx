import React from 'react'
import { StyleSheet, Text, View, VirtualizedList,  SafeAreaView,TextInput, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import HeaderComponent from '../../layouts/header/HeaderComponent';
import {LineChart,} from 'react-native-chart-kit'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';   
import ItemHistoryComponent from '../partials/ItemHistoryComponent';
export default function HomeAdminComponent({navigation}:any) {

    const DATA:any = [];

    const getItem = (data:any, index:number) => ({
      id: Math.random().toString(12).substring(0),
      title: `Depósito`,
      details:'Depósito Renta Casa 2',
      date:'12/10/2022'
    });

    const getItemCount = (data:any) => 50;
    return (
        <SafeAreaView style={styles.container}>
          <HeaderComponent navigation={navigation} />
          
          <View style={styles.view}>
            <Text style={styles.title}>
              <FontAwesome name="money" size={18} color="#3c1c5d" /> Ganancias Mensuales
            </Text>
            
            <LineChart
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }]
              }}
              width={Dimensions.get('window').width -50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fafafa',
                backgroundGradientTo: '#fcfcfc',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
            <Text style={styles.title}>
              <FontAwesome name="list" size={16} color="#3c1c5d" /> Transacciones
            </Text>
            <SafeAreaView>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }:any) => <ItemHistoryComponent data={item} />}
                keyExtractor={(item:any) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
              />
            </SafeAreaView>
          </View>
          
      </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    view:{
      flex:1,
      paddingLeft:10,
      paddingRight:10
    },
    title:{
      paddingTop: 20,
      color: "#1d1d1d",
      fontWeight: "bold",
    },
    
  });