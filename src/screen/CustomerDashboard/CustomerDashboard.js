import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

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
            style={{ width: "30%", height: "80%" }}
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
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "60%",
              overflow: "hidden",
            }}
            resizeMode="contain"
            source={require("../../../assets/dashboardcustomer/bell.png")}
          />
          <Image
            style={{ width: "60%", height: "50%", overflow: "hidden" }}
            resizeMode="contain"
            source={require("../../../assets/dashboardcustomer/search.png")}
          />
        </View>
      </View>
      <View style={styles.header}>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191A1F",
  },
  header: {
    width: "100%",
    height: "8%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomerDashboard;
