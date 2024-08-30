import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Dimensions } from "react-native";

const CustomerProfile = () => {
  // Static data for the chart
  

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: "20%",
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
          
          flexDirection: "row",
        }}
      >
       <Image style={{width:"100%",height:"100%"}} resizeMode="contain"source={require('../../../assets/dashboardcustomer/profile.png')}/>
      </View>
      <View
        style={{
          width: "80%",
          height: "40%",
          marginTop: 35,
          justifyContent:"space-between"
        }}
      >
        <View style={{width:"95%",height:"20%",justifyContent:'center',backgroundColor:'black',borderRadius:30}}>
            <Text style={{fontSize:16,color:"white",marginLeft:20}}>Name: Labh</Text>
        </View>
        <View style={{width:"95%",height:"20%",justifyContent:'center',backgroundColor:'black',borderRadius:30}}>
            <Text style={{fontSize:16,color:"white",marginLeft:20}}>Gender: Male</Text>
        </View>
        <View style={{width:"95%",height:"20%",justifyContent:'center',backgroundColor:'black',borderRadius:30}}>
            <Text style={{fontSize:16,color:"white",marginLeft:20}}>Email: labh@gmail.com</Text>
        </View>
        <View style={{width:"95%",height:"20%",justifyContent:'center',backgroundColor:'black',borderRadius:30}}>
            <Text style={{fontSize:16,color:"white",marginLeft:20}}>Phone: +919234112345</Text>        
        </View>
        
        
      </View>
      

      {/* Transactions FlatList */}
      <View
        style={{
          width: "100%",
          height: "50%",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
      </View>

      <View style={{ width: "95%", height: "25%", marginTop: 10 }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191A1F",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "8%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1F2126",
    borderRadius: 8,
    width: "95%",
    alignSelf: "center",
  },
  itemSeparator: {
    height: 15, // Height of the gap between items
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  transactionDetails: {
    justifyContent: "center",
  },
  transactionName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    color: "#AAAAAA",
    fontSize: 12,
  },
  transactionAmount: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomerProfile;
