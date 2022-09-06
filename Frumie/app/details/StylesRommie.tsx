import { StyleSheet } from "react-native" 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor:'whiite',
    }, 
    image: {
      margin:20,
      height:320,
      justifyContent: "center",
      padding: 10,
      borderRadius:25,
      borderColor:'white',
      borderWidth:5
    },
    imagePerfil:{
        width:190,
        height:190,

    },
    view: {
      paddingTop:0,

    },
    view2: {
      flexDirection: "column",
      justifyContent:'flex-start',
      marginTop: 0,
    },
    view3: {
      marginTop:110,      
      width:60,
      height:60,
    },
    view4: {
      width:200,
      height:200,  
      marginTop:120,
      alignContent:'center',
      borderRadius:200,
      borderColor:'white',
      borderWidth:5,
      alignSelf:'center',
    },
  
    btnRegreso: {
        marginTop:200,
        height: 50,
        width: 50,
        backgroundColor:'red'
    },
   
   
    view1:{
      flex:1,
      height: 50,
      width: 510,
      backgroundColor: '#FFFFFFBB',
      flexDirection:'row',
      position:'absolute',
      bottom:25,
      marginleft:100,
      borderRadius:20,
      alignSelf:'center', 
      alignContent:'center'
    },
    viewBtns:{
      height:50,
      width:50,
      alignSelf:'center',
    },
    viewBtnsU:{
      height:50,
      width:470,
      right:20,
      alignSelf:'center',  
      position:'absolute',   
      justifyContent:'space-between',
      flexDirection:'row'
    },
    scrollHorizontal:{
      flex:1,
      height:"100%",
      
    },
    card:{
        backgroundColor: "#FFF",
        padding: 5,
        borderRadius: 10,
        flexDirection: "row",
      },
    circle:{
        backgroundColor:'#309317',
        width:20,
        height:20,
        borderRadius:10,
        marginLeft:10,
        alignItems:'center',
        opacity:0.5,
        paddingTop:4
    },
    js: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
      },
      h1: {
        paddingTop: 20,
        color: "#1d1d1d",
        fontWeight: "bold",
      },
      viewinfo: {
        flex: 1,
        height: "50%",
        width: "100%",
        padding: 30,
        paddingTop: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        color:'white'
      },
      viewinfo2: {
        padding:5,
        backgroundColor:'white',
        borderRadius:5,
        flexDirection:'row'
      },
      viewinfotext: {
        height: 80,
        padding: 10,
        paddingTop: 20,
      },
    text4: {
        color: "#a3a3a3",
        fontSize: 16,
        textAlign: "left",
        paddingLeft:5
    },
    viewinfoubi: {
        height: 200,
        padding: 20,
        paddingTop: 20,
    },
    imageubi: {
        height: 150,
        width: 150,
      },

});
export default styles;