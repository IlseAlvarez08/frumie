import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './HomeComponent';
import HouseDetailsComponent from '../details/HouseDetailsCompoent';
import GalleryComponent from '../details/GalleryComponent';
import ProfileComponent from '../profile/ProfileComponent';
import RoomieDetailsComponent from '../details/RoomieDetails';
export default function HomeStackComponent({navigation}:any) {
    const Stack = createNativeStackNavigator()
    return (
        
        <Stack.Navigator> 
           <Stack.Screen name='HomeView' component={HomeComponent}  options={{title:"Home",headerShown: false,}} />
            
            <Stack.Screen name='HouseDetailsView' component={HouseDetailsComponent}  options={{title:"Frumie",headerShown: false,}} />
            <Stack.Screen name='GalleryView' component={GalleryComponent}  options={{title:"Galeria",headerShown: false,}} />
            <Stack.Screen name='UserView' component={ProfileComponent}  options={{title:"Login",headerShown: false,}} />
            {/* <Stack.Screen name='RoomieDetails' component={RoomieDetailsComponent}  options={{title:"Frumie",headerShown: false,}} />
            */}
                
        </Stack.Navigator>
    )
}