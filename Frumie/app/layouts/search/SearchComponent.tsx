import { StyleSheet, Text, View, Image,  TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react';
export default function SearchComponent() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Nuevo Casas Grandes', value: '1'},
      {label: 'Chihuahua Chihuahua', value: '2'},
      {label: 'Ciudad Juárez', value: '3'},
      {label: 'Cuahutemoc', value: '4'},
    ]);
    const [openS, setOpenS] = useState(false);
    const [valueS, setValueS] = useState(null);
    const [itemsS, setItemsS] = useState([
      {label: 'ITSNCG', value: '1'},
      {label: 'UACJ', value: '2'},
      {label: 'UTP', value: '3'},
      {label: 'URN', value: '4'},
    ]);
    //https://snack.expo.dev/@mali_ai/react-native-dropdown-picker
    return (

        <View style={styles.container}>
          <View style={{padding:10}}>
            <View style={styles.js}>
              <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                  <Entypo name="location-pin" size={14} color="#510094" />
                  <Text style={{color:"#1d1d1d", fontSize:14}}>Ubicación</Text>
                 
                </View>
                <View>
                <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder="Ciudad"
                      zIndex={5000}
                      style={styles.dropdown}
                      onChangeValue={(item:any) => console.log(item.label, item.value)}
                    />
                </View>
              </View>
              <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                  <FontAwesome name="building" size={14} color="#510094" />
                  <Text style={{color:"#1d1d1d", fontSize:14}}>Institución</Text>

                </View>
                <View>
                  <DropDownPicker
                        open={openS}
                        value={valueS}
                        items={itemsS}
                        setOpen={setOpenS}
                        setValue={setValueS}
                        setItems={setItemsS}
                        placeholder="Institución"
                        zIndex={3000}
                        style={styles.dropdown}
                        onChangeValue={(item:any) => console.log(item.label, item.value)}
                      />
                </View>
              </View>
            </View>
          </View>
           
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  view:{
    flexDirection: "row",

  },
 
  
  js: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
  },

  card:{
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 10,
  flex:1
  },
  dropdown: {
    borderColor: "#FFF",
  },
});