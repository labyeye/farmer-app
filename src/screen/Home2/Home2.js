import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS, // Import runOnJS
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const Home2 = () => {
  const navigation = useNavigation();
  const X = useSharedValue(10);

  // Define the function before using it
  const navigateToHome3 = () => {
    navigation.navigate("Home3");
  };

  const AnimatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      'worklet'; // Mark as worklet
      if (e.translationX < 0) {
        X.value = -e.translationX;
      } else {
        X.value = e.translationX;
      }
    },
    onEnd: () => {
      'worklet'; // Mark as worklet
      if (X.value < 150) {
        X.value = withSpring(10);
      } else {
        X.value = withSpring(240);
        runOnJS(navigateToHome3)(); // Use runOnJS to call navigation function
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X.value }],
    };
  });

  return (
    <ImageBackground
      source={require("../../../assets/homescreen/back.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.objcontainer}>
          <Text style={styles.title}>
            <Text style={styles.ies}>Welcome to Farmies!</Text>
          </Text>
        </View>
        <View style={styles.nextcontainer}>
          <View style={styles.sliderTrack}>
            <PanGestureHandler onGestureEvent={AnimatedGestureHandler}>
              <Animated.View style={[styles.sliderThumb, animatedStyle]}>
                <Image style={{width:20,height:20}}source={require('../../../assets/homescreen/arrow.png')}/>
              </Animated.View>
            </PanGestureHandler>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the background image covers the whole screen
    resizeMode: "cover", // Adjust this based on how you want the image to fit
  },
  sliderThumb: {
    width: 40,
    height: 40,
    position:'absolute',
    marginLeft:-5,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderTrack: {
    width: 300,
    height: 50,
    backgroundColor: "green",
    paddingLeft: 5,
    borderRadius: 45,
    justifyContent: "center",
  },
  slideText: {
    color: "#000000",
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2B964F",
    fontWeight: "bold",
    fontSize: 50,
  },
  ies: {
    color: "white",
    textAlign: "center",
  },
  objcontainer: {
    width: "100%",
    alignItems: "center",
    height: "60%",
    borderColor: "white",
    justifyContent: "center",
  },
  nextcontainer: {
    width: "100%",
    borderRadius: 10,
    height: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  slideText: {
    color: "black",
    fontSize: 18,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
});

export default Home2;
