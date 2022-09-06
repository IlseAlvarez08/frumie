import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  image: {
    margin: 20,
    height: 320,
    justifyContent: "center",
    padding: 25,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
  },
  view2: {
    flexDirection: "column",
    justifyContent: "space-between",

    marginTop: 0,
  },
  view3: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  view4: {
    paddingTop: 150,
  },
  view5: {
    paddingBottom: 10,
    borderRadius: 25,
  },
  view6: {
    paddingBottom: 30,
    borderRadius: 25,
  },
  imageCora: {
    height: 50,
    width: 50,
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    backgroundColor: "#000000c0",
  },
  text2: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    backgroundColor: "#000000c0",
  },
  text3: {
    color: "#1d1d1d",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    marginTop:10
  },
  text4: {
    color: "#a3a3a3",
    fontSize: 16,
    textAlign: "left",
    paddingLeft:5
  },
  imageBtn: {
    height: 50,
    width: 50,
    marginEnd: 10,
  },
  btnRegreso: {
    height: 50,
    width: 50,
    paddingBottom: 100,
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
  viewinfo3: {
    height: 50,
    padding: 30,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  viewinfoubi: {
    height: 200,
    padding: 30,
    paddingTop: 0,
  },
  viewinfotext: {
    height: 80,
    padding: 30,
    paddingTop: 0,
  },
  estrellas: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 10,
  },
  imageubi: {
    height: 150,
    width: 150,
  },
  btnRentar: {
    height: 50,
    width: 100,
    borderRadius: 8,
    flex: 2,
  },
  viewRentar: {
    height: 40,
    width: 100,
    borderRadius: 8,
    backgroundColor: "#510094",
    alignContent: "center",
    paddingTop: 0,
  },
  txtIn: {
    height: 50,
    flex: 1,
    backgroundColor:'white',
    borderRadius:5
  },
 
});
export default styles;