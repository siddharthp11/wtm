import { FlatList, Modal, View, Text, TouchableOpacity } from "react-native"
import { UserPopUpStyles as styles } from "./ComponentStyles"
//make user obj 
export default UserPopUp = ({ visible, onClose }) => {

    var friends = [{ uid: '1020', email: 'sam@wtm.com' }, { uid: '1222', email: 'ram@wtm.com' }]
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.popUpParentContainer}>
                <View style={styles.popUpContainer}>
                    <View style={styles.popUpTextContainer}>
                        <Text style={{ color: 'lightblue' }}>Friends</Text>
                    </View>
                    <View style={styles.popUpListContainer}>
                        <FlatList
                            data={friends}
                            keyExtractor={item => item.uid}
                            renderItem={({ item }) => (
                                <View style={styles.popupListItem}>
                                    <Text style={{ color: 'lightgreen' }}>
                                        {item.email}
                                    </Text>
                                </View>
                            )}></FlatList>
                    </View>

                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </Modal>


    )
}