import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import styles from '../styles';

const FloatingActionButton = (props) => (
  <View style={styles.createEventButton}>
    <FloatingAction
      showBackground={false}
      actions={[
        {
          text: "Accessibility",
          name: "bt_accessibility",
          position: 2,
        },
        {
          text: "Something Else",
          name: "something_else",
          position: 1,
        }
      ]}
      onPressItem={(name) => {
        console.log(name);
        props.onPressItem()
      }}
    />
  </View>
);

export default FloatingActionButton;