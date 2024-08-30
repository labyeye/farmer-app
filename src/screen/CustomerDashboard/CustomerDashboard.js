import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CustomerDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "40%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "30%", height: "80%",marginLeft:20 }}
            resizeMode="contain"
            source={require("../../../assets/dashboardcustomer/profile.png")}
          />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            Labh Bothra
          </Text>
        </View>
        <View
          style={{
            width: "20%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 20,
          }}
        >
          <Image
            style={{
              width: "40%",
              height: "40%",
              overflow: "hidden",
            }}
            resizeMode="contain"
            source={require("../../../assets/dashboardcustomer/bell.png")}
          />
          <Image
            style={{ width: "35%", height: "35%", overflow: "hidden" ,marginRight:20}}
            resizeMode="contain"
            source={require("../../../assets/dashboardcustomer/search.png")}
          />
        </View>
      </View>
      <View
        style={{
          height: "6%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={{ backgroundColor: "#0E162C", width: "90%",height:"100%", padding: 10,borderRadius:10 }}
          placeholder="Search for Interesting Foods"
          placeholderTextColor={"grey"}
        />
      </View>
      <View
        style={{
          width: "95%",
          height: "2%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Special Offers
        </Text>
        <Text style={{ color: "green", fontWeight: "700" }}>See More...</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "22%",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          source={require("../../../assets/dashboardcustomer/offer.png")}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: "95%", height: "25%" ,marginTop:10}}>
        <View style={{ height: "50%", width: "100%" ,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/wheat.png')}/>
            <Text style={{color:"white"}}>Rice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/pizza.png')}/>
            <Text style={{color:"white"}}>Wheat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/instant-noodles.png')}/>
            <Text style={{color:"white"}}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/chicken.png')}/>
            <Text style={{color:"white"}}>Chicken</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "50%", width: "100%" ,justifyContent:'space-between',flexDirection:'row'}}>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/vegetarian.png')}/>
            <Text style={{color:"white"}}>Vegetable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/tomato.png')}/>
            <Text style={{color:"white"}}>Tomato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/beer.png')}/>
            <Text style={{color:"white"}}>Cow Milk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"100%",width:"25%",alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:"40%",height:"40%"}} resizeMethod="contain" source={require('../../../assets/dashboardcustomer/melonpan.png')}/>
            <Text style={{color:"white"}}>Others</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});

export default CustomerDashboard;
