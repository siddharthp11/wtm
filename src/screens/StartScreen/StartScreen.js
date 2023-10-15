import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFonts } from 'expo-font';



export default function StartScreen() {

  const [fontsLoaded] = useFonts({
    'font': require('../../../assets/fonts/mexcellent-rg.otf'),
  });

  let neonLight = useRef(new Animated.Value(0)).current;
  const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'indigo', 'violet']
  generateRandomNumber = () => { 
    const min = 0; 
    const max = colors.length - 1; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

  const randomNumber = generateRandomNumber();
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    neon: {
        fontSize: 90,
        fontFamily: 'font',
        color: colors[randomNumber],
        textShadowColor: colors[randomNumber],
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
        opacity: neonLight
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
      ]).start()

    const timer = setTimeout(() => {
      setShowLoginButton(true);
      navigation.navigate("Login Screen");
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
      {showLoginButton && (
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("Login Screen");
          }}
        ></Button>
      )}
    </View>
  );
}
