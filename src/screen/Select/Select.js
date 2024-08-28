import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
const Select = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image
          style={{width:"30%",height:"10%",alignSelf:'center',flexDirection:'column',justifyContent:"flex-start"}}
          resizeMode="contain"
          source={require("../../../assets/homescreen/object.png")}
        />
        <Text style={styles.title}>
          <Text style={styles.farm}>Farm</Text>
          <Text style={styles.ies}>ies</Text>
        </Text>
      <View style={styles.objcontainer}>
      
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../../assets/select/farmer.png")}
        />
        <TouchableOpacity style={styles.farmer} onPress={() => navigation.navigate('LoginFarmer')}>
            <Text style={{fontSize:17,color:"white",fontWeight:'bold',paddingLeft:20}}>Are You a Farmer</Text>
            <Image style={{width:30,height:30,marginRight:10}}source={require('../../../assets/homescreen/next.png')}/>
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../../assets/select/customer.png")}
        />
        <TouchableOpacity style={styles.farmer} onPress={() => navigation.navigate('CustomerLogin')}>
            <Text style={{fontSize:17,color:"white",fontWeight:'bold',paddingLeft:20}}>Are You a Customer</Text>
            <Image style={{width:30,height:30,marginRight:10}}source={require('../../../assets/homescreen/next.png')}/>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191A1F",
    justifyContent: "center",
    alignItems: "center",
  },
  farmer:{
    width:"70%",
    height:"8%",
    borderRadius:50,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"row",
    marginBottom:90
  },
  title: {
    color: "#2B964F",
    fontWeight: "bold",
    fontSize: 30,
  },
  farm: {
    color: "green",
  },
  ies: {
    color: "white",
  },
  image: {
    width: "60%",
    height: "30%",
  },
  objcontainer: {
    width: "100%",
    alignItems: "center",
    height: "60%",
    borderColor: "white",
    marginTop:50,
    justifyContent: "space-between",
  },
  nextcontainer: {
    width: "100%",
    borderRadius: 10,

    height: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  next: {
    marginTop: 90,
    width: "50%",
    height: "20%",
    alignContent: "flex-end",
  },
});
export default Select;
