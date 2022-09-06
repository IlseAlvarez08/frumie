import { StyleSheet } from "react-native";
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    paddingRight: 10,
  },
  h1: {
    paddingTop: 20,
    color: "#1d1d1d",
    fontWeight: "bold",
  },
  title: {
  
    fontSize: 16,
    color: "#525252",
  },
  text: {
  
    fontSize: 12,
    color: "#afafaf",
  },
  item: {
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-start",
    padding: 5,
    borderTopColor: "#fcfcfc",
    borderTopWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 5,
  },
  col: {
    padding: 10,
  },
  js: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
  },
  fondo: {
    backgroundColor: "#309317",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    opacity:0.5
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
    input:{
        backgroundColor:'transparent',
        borderWidth:0,
        flex:1
    }
});

export default styles;
