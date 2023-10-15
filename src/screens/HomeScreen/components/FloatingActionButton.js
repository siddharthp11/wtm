import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import styles from "../styles";
import { auth } from "../../../firebase/config";

const FloatingActionButton = (props) => (
  <View style={styles.createEventButton}>
    <FloatingAction
      showBackground={false}
      actions={[
        {
          text: "logout",
          name: "logout",
          position: 2,
        },
        {
          text: "create event",
          name: "create-event",
          position: 1,
        },
      ]}
      onPressItem={(name) => {
        if (name === "logout") {
          auth.signOut();
        } else {
          props.onPressItem();
        }
      }}
    />
  </View>
);

export default FloatingActionButton;
