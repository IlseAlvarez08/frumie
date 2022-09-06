import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',

    },
    view1:{
      flex:5,
      width:510,
      height: 200,
      paddingLeft:10,
      paddingRight:10,
      flexDirection:'row',
      position:'absolute',
      top:150,
      marginleft:100,
      borderRadius:20,
      alignSelf:'center', 
      alignContent:'center'
    },
    view12:{
      flex:1,
      width:510,
      height: 50,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor: '#FFFFFFBB',
      flexDirection:'row',
      position:'absolute',
      bottom:25,
      marginleft:100,
      borderRadius:20,
      alignSelf:'center', 
      alignContent:'center'
    },
    view2:{
      flex:1,
        padding:50, 
        width:"100%"
    },
    viewcarga:{
      flex:1,
      height:200,
      width:"100%",
      alignSelf:'center',
      alignContent:'center',
    },
    viewBtn:{
      height:50,
      width:470,
      top: 400,
      alignSelf:'center',  
      position:'absolute',   
      justifyContent:'space-between',
      flexDirection:'row'
    },
    text1: {
        color: "#1d1d1d",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
      },
      text2: {
        color: "#1d1d1d",
        fontSize: 25,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
      },
      text3:{
      color: "#1d1d1d",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: "center",
      },
      textIcon:{
        color: "#1d1d1d",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "center",
        textAlignVertical: "center",
        paddingLeft: 4
        },
        textFechaP:{
          color: "#1d1d1d",
          fontSize: 18,
          fontWeight: "normal",
          textAlign: "center",
          textAlignVertical: "center",
          paddingLeft: 4
          },
          textPaypal:{
            color: "#1d1d1d",
            fontSize: 12,
            fontWeight: "normal",
            textAlign: "center",
            textAlignVertical: "center",
            paddingLeft: 4
            },
    viewRentar:{
      flex:1,
      height: 50,
      width: "50%",
      alignSelf:'center',
      borderRadius:8, 
      backgroundColor:'#510094',
      alignContent:'center',
      paddingTop:0

  },
  viewServicios:{
   
    flexDirection:'column',
    top: 200,
    padding:20,
  },
  viewPagos:{
  
    top:340,
    flexDirection:'column',
    padding:20
  },

  viewTit2:{
    width: 480,
    height:50
  },
  btnsIcons:{
    width: 480,
    height:70,
    flexDirection:'row'
  },
  viewIcon:{
    flexDirection: "row",
    justifyContent:'flex-start',
    alignContent:'center',
    paddingLeft: 25,
  },
  btnsIconsPago:{
    width: 480,
    flexDirection:'column'
  },
  h1: {
    paddingTop: 20,
    color: "#1d1d1d",
    fontWeight: "bold",
  },
  js: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
  },

  card:{
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    height:40
  },
  circle:{
    backgroundColor:'#309317',
    width:20,
    height:20,
    borderRadius:10,
    marginLeft:10,
    alignItems:'center',
    opacity:0.8,
    paddingTop:4
    },
  });
export default styles;