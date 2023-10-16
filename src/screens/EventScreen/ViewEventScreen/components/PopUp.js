import React from "react";
import { Modal, View, Text, Button } from "react-native";
import styles from "../styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapstyle from "../../mapstyle.json";

const PopUp = ({ visible, onClose, item }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => { }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalViewTitleText}>{item.name}</Text>
        <Text style={styles.modalViewText}>
          Date: {new Date(1000 * item.date?.seconds).toDateString()}
        </Text>
        <Text style={styles.modalViewText}>
          Time: {new Date(1000 * item.date?.seconds).toTimeString()}
        </Text>
        <Text style={styles.modalViewText}>Tag: {item.tag}</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          initialRegion={{
            latitude: item.location?.latitude,
            latitudeDelta: 0.020592708501247614,
            longitude: item.location?.longitude,
            longitudeDelta: 0.012477971613407135,
          }}
          customMapStyle={mapstyle}
        >
          <Marker
            key={item.id}
            coordinate={item.location}
            title={item.name}
          // description={item.tag}
          />
        </MapView>
        <View style={styles.modalViewCloseButtonView}>
          <Button
            style={styles.modalViewCloseButton}
            title="X"
            onPress={onClose}
          />
        </View>
        <View style={styles.modalViewMoveButtonView}>
          <Button
            // style={styles.modalViewCloseButton}
            title="That's a Move!"
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  </Modal>
);

export default PopUp;
