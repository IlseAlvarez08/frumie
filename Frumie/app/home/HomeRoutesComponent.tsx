import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import HomeComponent from './HomeComponent';
import MapComponent from '../map/MapComponent';
import { Entypo } from '@expo/vector-icons';
import NotiComponent from '../notifications/NotiComponent';
import SettingsComponent from '../settings/SettingsComponent';
import HomeStackComponent from './HomeStackComponent';
import ProfileComponent from '../profile/ProfileComponent';
export default function HomeRoutesComponent({navigation}:any) {
    //https://github.com/phanoophong/react-native-chart-kit
    //https://docs.expo.dev/guides/icons/#expovector-icons 
    //https://icons.expo.fyi/
    const Tab = createBottomTabNavigator()
   
    return (
      
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#3c1c5d',
          tabBarStyle: {
            borderTopColor: 'transparent'
          },
          tabBarShowLabel:false
        }}
      >
        <Tab.Screen
          name="Home"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),
          }}component={HomeStackComponent}
        />
        <Tab.Screen
          name="Mapa"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => ( <Entypo name="location-pin" size={26} color={color} /> ),
          }}
          component={MapComponent}
        />
         <Tab.Screen
          name="Notificaciones"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell" size={26} color={color} />
            ),
          }}
          component={NotiComponent}
        />
          <Tab.Screen
          name="Mi Casa"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
          }}
          component={ProfileComponent}
        />
        <Tab.Screen
          name="Ajustes"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={26} color={color} />
            ),
          }}
          component={SettingsComponent}
        />
        </Tab.Navigator>
       
        
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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