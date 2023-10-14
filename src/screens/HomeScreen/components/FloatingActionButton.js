import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import styles from '../styles'; 
import { auth } from "../../../firebase/config";

const FloatingActionButton = ({navigation}) => (
  <View style={styles.createEventButton}>
    <FloatingAction
      showBackground={false}
      actions={[
        {
          text: "logout",
          name: "logout",
          position: 2,
        },
      ]}
      onPressItem={(name) => {
        if (name === 'logout'){
          auth.signOut()
        }
      }}
    />
  </View>
);

export default FloatingActionButton;