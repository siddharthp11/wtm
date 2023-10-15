import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function StartScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    font: require("../../../assets/fonts/mexcellent-rg.otf"),
  });

  const colors = ["red", "orange", "yellow", "green", "cyan", "violet"];
  generateRandomNumber = () => {
    const min = 0;
    const max = colors.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = useRef(generateRandomNumber()).current;
  let neonLight = useRef(new Animated.Value(0)).current;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      height: "100%",
      width: Dimensions.get("window").width,
    },
    neon: {
      fontSize: 90,
      fontFamily: "font",
      color: colors[randomNumber],
      textShadowColor: colors[randomNumber],
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 30,
      opacity: neonLight,
    },
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(neonLight, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(neonLight, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.navigate("Login Screen", {
        color: colors[randomNumber],
        font: "font",
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.neon]}>WTM</Animated.Text>
    </View>
  );
}
