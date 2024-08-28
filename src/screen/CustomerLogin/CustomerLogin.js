import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
const CustomerLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "flex-start",

          marginTop: 50,
        }}
      >
        <Image
          style={{
            width: "70%",
            height: "70%",
            alignSelf: "center",
            flexDirection: "column",
          }}
          resizeMode="contain"
          source={require("../../../assets/homescreen/object.png")}
        />
        <Text style={styles.title}>
          <Text style={styles.farm}>Farm</Text>
          <Text style={styles.ies}>ies</Text>
        </Text>
      </View>
      <View style={styles.objcontainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../../assets/select/customer.png")}
        />
        <Text style={{ fontSize: 40, color: "white" }}>Let's You In</Text>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "30%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  width: "70%",
                  height: "38%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                placeholder="Enter Phone Number"
              />
              <TextInput
                style={{
                  width: "70%",
                  height: "38%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                placeholder="Enter Password"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "40%",
                marginTop:30,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.farmer}>
                <Text
                  style={{ fontSize: 17, color: "white", fontWeight: "bold" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "70%",
                  height: "25%",
                  borderRadius: 50,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: "78%", height: "59%" }}
                  source={require("../../../assets/login/googlelogin.png")}
                />
              </TouchableOpacity>
              <Text
                style={{ color: "white", fontWeight: "bold", marginBottom: 50 }}
                onPress={() => navigation.navigate("CustomerSignUp")}
              >
                No Account !! SignUp
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191A1F",
    alignItems: "center",
  },
  farmer: {
    width: "70%",
    height: "20%",
    borderRadius: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2B964F",
    fontWeight: "bold",
    fontSize: 20,
  },
  farm: {
    color: "green",
  },
  ies: {
    color: "white",
  },
  image: {
    width: "60%",
    height: "35%",
    marginTop: 30,
  },
  objcontainer: {
    width: "100%",
    alignItems: "center",
    height: "60%",
    borderColor: "white",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20,
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
export default CustomerLogin;
