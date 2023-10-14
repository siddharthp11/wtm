import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';


export default function StartupScreen() {

  let neonLight = useRef(new Animated.Value(0)).current;

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
        fontSize: 64,
        color: 'violet',
        textShadowColor: 'violet',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
    },
  });

  useEffect(() => {
    // Animated.loop(
      Animated.sequence([
        Animated.timing(neonLight, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(neonLight, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(neonLight, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start()
    //   { iterations: -1 }
    // ).start();
  }, []);


  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.neon]}>
        WTM
      </Animated.Text>
    </View>
  );
}