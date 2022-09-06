import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import PostViewComponent from '../posts/PostViewComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsComponent from '../posts/PostsComponent';

export default function PostHomeComponent({navigation}:any) {
    const Stack = createNativeStackNavigator()
    return (
        
        <Stack.Navigator> 
           <Stack.Screen name='PostHome' component={PostsComponent}  options={{title:"Admin",headerShown: false,}} />
               
               <Stack.Screen name='PostView' component={PostViewComponent}  options={{
                    title:"Dpto Lomas",
                    
                      headerTintColor: '#1d1d1d',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }} />
               
                
        </Stack.Navigator>
    )
}