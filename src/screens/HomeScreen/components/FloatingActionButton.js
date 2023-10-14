import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import styles from '../styles'; 

const FloatingActionButton = () => (
  <View style={styles.createEventButton}>
    <FloatingAction
      showBackground={false}
      actions={[
        {
          text: "Accessibility",
          name: "bt_accessibility",
          position: 2,
        },
      ]}
      onPressItem={(name) => {
        console.log(`selected button: ${name}`);
      }}
    />
  </View>
);

export default FloatingActionButton;