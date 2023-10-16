import React from "react";
import { Modal, View, Text, Button } from "react-native";
import styles from "../styles";

const PopUp = ({ item }) => (

    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalViewTitleText}>{item.name}</Text>
            <Text style={styles.modalViewText}>
                Date: {new Date(1000 * item.date?.seconds).toDateString()}
            </Text>
        </View>
    </View>
    // </Modal>
);

export default PopUp;
