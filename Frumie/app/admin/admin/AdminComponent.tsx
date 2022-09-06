import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import HeaderComponent from '../../layouts/header/HeaderComponent';
import NavBarComponent from '../layouts/navbar/NavBarComponent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import HomeAdminComponent from '../homeadmin/HomeAdminComponent';
import PostHomeComponent from '../posts/PostHomeComponent';
import AdminFavsComponent from '../adminfavs/AdminFavsComponent';

export default function AdminComponent({navigation}:any) {
    //https://github.com/phanoophong/react-native-chart-kit
    //https://docs.expo.dev/guides/icons/#expovector-icons 
    //https://icons.expo.fyi/
    const Tab = createBottomTabNavigator()
   
    return (
      
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#3c1c5d',
          tabBarStyle: {
            borderTopColor: 'transparent'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          component={HomeAdminComponent}
        />
        <Tab.Screen
          name="Mis Casas"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" size={26} color={color} />
            ),
          }}
          component={PostHomeComponent}
        />
         <Tab.Screen
          name="Notificaciones"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell" size={26} color={color} />
            ),
          }}
          component={AdminFavsComponent}
        />
        <Tab.Screen
          name="Ajustes"
          options={{headerShown: false, 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={26} color={color} />
            ),
          }}
          component={PostHomeComponent}
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