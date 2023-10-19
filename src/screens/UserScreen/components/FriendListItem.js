import { Text, View, TouchableOpacity } from 'react-native';
import { FriendListItemStyles as styles } from './ComponentStyles'
export default FriendListItem = ({ item }) => {
    return (
        <View style={styles.friendContainer}>
            <Text style={[styles.friendTextContainer, { color: 'pink' }]}>{item.email}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonTextContainer}> + </Text>
            </TouchableOpacity>
        </View>
    );
};