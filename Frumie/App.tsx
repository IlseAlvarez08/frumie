
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './views/home/HomeFComponent';
import UserComponent from './views/userview/UserComponent';
import HeaderComponent from './views/layouts/header/HeaderComponent';
import GpsComponent from './views/components/gps/GpsComponent';
import DetailsComponent from './views/components/details/DetailsComponent';
import RoomieDetailsComponent from './views/components/roomiedetails/RoomieDetailsComponent';
import Foto1 from './views/components/details/Foto1';
import Foto3 from './views/components/details/Foto3';
import Foto2 from './views/components/details/Foto2';
import Foto4 from './views/components/details/Foto 4';
import InicioComponent from './views/components/inicio/InicioComponent';
import ComoComponent from './views/components/inicio/ComoComponent';
import LoginAComponent from './views/components/inicio/LoginAComponent';
import LoginFComponent from './views/components/inicio/LoginFComponent';
import HomeFComponent from './views/home/HomeFComponent';
import HomeAComponent from './views/home/HomeAComponent';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name='Inicio'
          component={InicioComponent}
          options={{
            title:"Frumie",
            headerShown: false,
            headerStyle:{
              backgroundColor: '#f4511e'
            }
          }}
        />
        
        <Stack.Screen 
          name="HomeF" 
          component={HomeFComponent}
          options={{
            title:'Bienvenidos',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="HomeA" 
          component={HomeAComponent}
          options={{
            title:'Bienvenidos',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="LoginF" 
          component={LoginFComponent}
          options={{
            title:'Bienvenidos',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="LoginA" 
          component={LoginAComponent}
          options={{
            title:'Bienvenidos',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="How" 
          component={ComoComponent}
          options={{
            title:'Frumie',
            headerShown: false
          }}
        />
        
        <Stack.Screen 
          name='Details'
          component={DetailsComponent}
          options={{
            title:"MarvelApp",
            headerShown: false,
            headerStyle:{
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#FFF',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
        />
        <Stack.Screen 
          name='RoomieDetails'
          component={RoomieDetailsComponent}
          options={{
            title:"MarvelApp",
            headerShown: false,
            headerStyle:{
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#FFF',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
        />
        <Stack.Screen 
          name='Foto1'
          component={Foto1}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='Foto2'
          component={Foto2}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='Foto3'
          component={Foto3}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='Foto4'
          component={Foto4}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
        name='UserView'
        component={UserComponent}
        options={{
          title:"user",
          headerShown: false,
          headerStyle:{
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}
        />
        <Stack.Screen 
        name='Ubicacion'
        component={GpsComponent}
        options={{
          title:"Ubicacion",
          headerShown: false,
          headerStyle:{
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}
        />
        


      </Stack.Navigator>
    </NavigationContainer>
    );
  }