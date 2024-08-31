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
  ScrollView
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import rice from "../../../assets/dashboardcustomer/pizza.png"
import chicken from "../../../assets/dashboardcustomer/chicken.png"
import wheat from "../../../assets/dashboardcustomer/wheat.png"

const FarmerDashBoard = () => {
  // Static data for the chart
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50], // Orders sold each day
      },
    ],
  };

  // Configuration for the chart
  const chartConfig = {
    backgroundGradientFrom: "#ffffff", // Background gradient start color
    backgroundGradientTo: "#ffffff", // Background gradient end color
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Chart color
    strokeWidth: 2, // Default 3
    barPercentage: 0.5, // Adjusts the width of bars
  };

  // Get the screen width for responsive chart sizing
  const screenWidth = Dimensions.get("window").width;

  // Static data for the FlatList
  const detailData = [
    {
      id: "1",
      photo: rice,
      name: "Rice",
      time: "10:00 AM",
      price: "₹2300",
    },
    {
      id: "2",
      photo: wheat,
      name: "Wheat",
      time: "11:00 AM",
      price: "₹4300",
    },
    {
      id: "3",
      photo: chicken,
      name: "Chicken",
      time: "12:00 PM",
      price: "₹1300",
    },
    {
      id: "4",
      photo: rice,
      name: "Rice",
      time: "01:00 PM",
      price: "₹300",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.photo} style={styles.photo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
              style={{ width: "30%", height: "80%", marginLeft: 20 }}
              resizeMode="contain"
              source={require("../../../assets/dashboardcustomer/profile.png")}
            />
            <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
              Yash Sriwastav
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
              style={{
                width: "35%",
                height: "35%",
                overflow: "hidden",
                marginRight: 20,
              }}
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
            style={{
              backgroundColor: "#0E162C",
              width: "90%",
              height: "100%",
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Search for Interesting Foods"
            placeholderTextColor={"grey"}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={{
              width: "40%",
              height: "100%",
              backgroundColor: "green",
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Add Products
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              height: "100%",
              backgroundColor: "green",
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              View Products
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: "40%",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                padding: 15,
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
              }}
            >
              Total Sales
            </Text>
            <BarChart
              data={salesData}
              width={screenWidth * 0.85} // Slightly smaller than the container width
              height={230} // Adjust height for the chart
              chartConfig={chartConfig}
              verticalLabelRotation={30} // Optional: Rotate x-axis labels for better readability
              style={{ borderRadius: 10 }}
            />
          </View>
        </View>
        <View style={{ width: "95%", height: "25%", marginTop: 10 }}>
          <Text style={{ fontSize: 25, color: "white" }}>Received Orders</Text>
          <FlatList
            data={detailData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Add some padding at the bottom to ensure content is not cut off
  },
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
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1F2126",
    borderRadius: 10,
    marginBottom: 10,
    marginTop:5,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default FarmerDashBoard;
