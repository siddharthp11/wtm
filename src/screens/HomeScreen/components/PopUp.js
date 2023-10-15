import React from "react";
import { Modal, View, Text, Button } from "react-native";
import styles from "../styles";

const PopUp = ({ visible, onClose, item }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => {}}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalViewTitleText}>{item.name}</Text>
        {/* <Text style={styles.modalViewText}>{item.date.toDateString()}</Text>
        <Text style={styles.modalViewText}>{item.date.toTimeString()}</Text> */}
        <Text style={styles.modalViewText}>{item.tag}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default PopUp;
