

import {  Text, View,StyleSheet,TouchableWithoutFeedback, Dimensions, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ItemCommentComponent from "../partials/ItemCommentComponent";
import PagerView from 'react-native-pager-view';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryComponent({navigation}:any) {

      const cambiar = ()=>{ 
        navigation.navigate('HouseDetailsView')
       }
    return (
    <View>
       <View style={{ height: Dimensions.get('screen').height,borderRadius:20}}>
                <View style={styles.btnRegreso}>
                    <TouchableWithoutFeedback  onPress={ ()=> cambiar() }>
                        <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1 }}>
                  <PagerView style={styles.viewPager} initialPage={0}>
                    <ImageBackground style={styles.page}
                      source={{uri:'https://grijalvaromero.deskode.com/frumie/fachada.png'}}  key="1"></ImageBackground>
                    
                    <ImageBackground style={styles.page}
                      source={{uri:'https://grijalvaromero.deskode.com/frumie/details/d1.jpg'}}  key="2"></ImageBackground>
                    
                    <ImageBackground style={styles.page}
                      source={{uri:'https://grijalvaromero.deskode.com/frumie/details/d2.jpg'}}  key="3"></ImageBackground>
                    
                    <ImageBackground style={styles.page}
                      source={{uri:'https://grijalvaromero.deskode.com/frumie/details/d3.jpg'}}  key="4"></ImageBackground>
                    
                  </PagerView>
                </View>
              </View>
    </View>

      
    );
 }
 const styles = StyleSheet.create({
    btnRegreso: {
        width:50,
        height:50,
        position: 'absolute',
        top:60,
        left:10,
        zIndex:2

      },
      viewPager: {
        flex: 1,
        
      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },
 })