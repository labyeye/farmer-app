import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const SignUpFarmer = ({ navigation }) => {
  return (
    
      <SafeAreaView style={styles.container}>
        <View style={styles.objcontainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../../../assets/login/crop.png")}
          />
          <Text style={styles.headerText}>Let's Create</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Phone Number"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                placeholderTextColor="grey"
              />
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.farmer}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
              <Text
                style={styles.signUpText}
                onPress={() => navigation.navigate("LoginFarmer")}
              >
                Already Have an Account
              </Text>
              {/* <TouchableOpacity style={styles.googleButton}>
                <Image
                  style={styles.googleImage}
                  resizeMode="contain"
                  source={require("../../../assets/login/googlelogin.png")}
                />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  farmer: {
    width: "80%",
    height: "37%",
    marginTop:20,
    borderRadius: 10,
    backgroundColor: "#007FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 40,
    color: "black",
  },
  textInput: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.4)", // semi-transparent white
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
  },
  textInputContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputsContainer: {
    height: "50%",
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  signUpText: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 40,
    marginTop:5,
  },
  googleButton: {
    width: "80%",
    height: "37%",
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  googleImage: {
    width: "70%",
    height: "90%",
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
});

export default SignUpFarmer;
