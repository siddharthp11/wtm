import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../styles";
import PopUp from "./PopUp";

const ListItem = ({ item }) => {
  const [visiblePopUp, setVisiblePopUp] = useState(-1);

  const openPopUp = (item) => {
    setVisiblePopUp(item.id);
  };

  const closePopUp = () => {
    setVisiblePopUp(-1);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          return openPopUp(item);
        }}
      >
        <View style={styles.listItem}>
          <Text style={styles.textInListItem}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <PopUp
        visible={item.id === visiblePopUp}
        onClose={() => closePopUp()}
        item={item}
      />
    </View>
  );
};

export default ListItem;
