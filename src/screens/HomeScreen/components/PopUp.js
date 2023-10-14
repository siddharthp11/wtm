import React from "react";
import { Modal, View, Text, Button } from "react-native";
import styles from '../styles'; 

const PopUp = ({ visible, onClose, item }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => {}}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>Pop-up Content</Text>
        <Text>{item.name}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default PopUp;