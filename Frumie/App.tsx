
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './app/home/HomeComponent';
import MapComponent from './app/map/MapComponent';
import FavsComponent from './app/favs/FavsComponent';
import NotiComponent from './app/notifications/NotiComponent';
import SettingsComponent from './app/settings/SettingsComponent';
import LoginComponent from './app/auth/LoginComponent';
import HouseDetailsComponent from './app/details/HouseDetailsCompoent';
import AdminComponent from './app/admin/admin/AdminComponent';
import GalleryComponent from './app/details/GalleryComponent';
import RoomieDetailsComponent from './app/details/RoomieDetails';
import ProfileComponent from './app/profile/ProfileComponent';
import HomeRoutesComponent from './app/home/HomeRoutesComponent';
import HomeStackComponent from './app/home/HomeStackComponent';
import RegisterComponent from './app/auth/RegisterComponent';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // https://reactnativeelements.com/docs/components/button
    //https://reactnativeelements.com/docs/installation#stable
   
    <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name='Login' component={LoginComponent}  options={{title:"Login",headerShown: false,}} />
            <Stack.Screen name='Register' component={RegisterComponent}  options={{title:"Login",headerShown: false,}} />
          
            {/* PESTANAS */}
            <Stack.Screen name='HomeRoutes' component={HomeRoutesComponent}  options={{title:"Login",headerShown: false,}} />
            <Stack.Screen name='AdminView' component={AdminComponent}  options={{title:"Admin",headerShown: false,}} />
            
           
          </Stack.Navigator>
         

      
    </NavigationContainer>
    );
  }