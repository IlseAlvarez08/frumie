import {  Text, View, Image, ScrollView, FlatList } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import HeaderComponent from '../layouts/header/HeaderComponent';
import NavComponent from '../layouts/nav/NavComponent';

import styles from './styles';
import ItemPayment from '../partials/ItemPayment';
import { useAssets } from 'expo-asset';
export default function ProfileComponent ({navigation}:any){
        const cambiar = ()=>{ 
        navigation.navigate('Details')
       }
       const home = ()=>{ 
        navigation.navigate('HomeF')
       }
       
       const data:any = [
        {id:1, title:'Pago',description:'Servicio eléctrico pagado correctamente - PayPal',date:'12/10/2022'},
        {id:1, title:'Pago',description:'Servicio de agua pagado correctamente - PayPal',date:'12/10/2022'},
        {id:1, title:'Pago',description:'Servicio de Internet pagado correctamente - PayPal',date:'12/10/2022'},
      ];
        const [assets, error] = useAssets([
            require('../../assets/progress.png'), 
        ]);
       return (
       <View style={styles.container}>
        <ScrollView style={{flex:1}}>
            <HeaderComponent navigation={navigation} />
        
            <View style={styles.view1}>
                <View style={styles.viewcarga}>
                    {assets ? <Image source={assets[0]}  style={{ width:100, height:100, 
                            paddingBottom: 50,marginLeft:30}} /> : null }
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text1}>Calle Juárez #2500</Text>
                    <Text style={styles.text2}>Col. Centro</Text>
                    <Text style={styles.text3}>$2000.00 mxn</Text>
                </View>
            </View>
            
           <View style={styles.viewServicios}>
              
                <Text style={styles.h1}>Pago de Servicios</Text>
                <View style={styles.js}>

                    <View style={styles.card}>
                    <View><Entypo name="light-bulb" size={15} color="#5d5d5d" /></View>
                    <Text style={{color:'#5d5d5d'}}>Electricidad</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                    <View style={styles.card}>
                    <View><Entypo name="water" size={15} color="#5d5d5d" /></View>
                    <Text style={{color:'#5d5d5d'}}>Agua</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                    <View style={styles.card}>
                    <View><Entypo name="network" size={15} color="#5d5d5d" /></View>
                    <Text style={{color:'#5d5d5d'}}>Internet</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                </View>
                <View style={{height:20}}></View>
                <View style={styles.js}>
                   
                    <View style={styles.card}>
                    <View><Text><FontAwesome5 name="tv" size={15} color="#5d5d5d" /></Text></View>
                    <Text style={{color:'#5d5d5d'}}>TV</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                    <View style={styles.card}>
                    <View><MaterialCommunityIcons name="gas-cylinder" size={15} color="#5d5d5d" /></View>
                    <Text style={{color:'#5d5d5d'}}>Gas</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                    <View style={styles.card}>
                    <View><Entypo name="network" size={15} color="#5d5d5d" /></View>
                    <Text style={{color:'#5d5d5d'}}>Network</Text>
                    <View style={styles.circle}><FontAwesome5 name="check" size={10} color="#FFF" /></View>
                    </View>
                </View>
                
           </View>
        
       </ScrollView>
       <View style={{padding:10,flex:1}}>
        <Text style={styles.h1}>Historial de pagos</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                    renderItem={({ item }) => (
                    <ItemPayment data={item} navigation={navigation} />
                    )}
            />
       </View>
       
    </View>
        
       );
}
