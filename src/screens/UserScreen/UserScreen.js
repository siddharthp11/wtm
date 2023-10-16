import { View, StyleSheet, Text } from "react-native";

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.friendsContainer}>
                <Text style={styles.friendsText}>Hi</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flexDirection: "column",
        flex: 1,
        padding: 20,
    },
    friendsContainer: {
        backgroundColor: "black",
        flexDirection: "column",
        flex: 1,
        padding: 20,
    },
    friendsText: {
        color: 'white'
    }
})