import { View, Text } from "react-native";
import styles from "./styles";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import { useContext, useEffect } from "react";

export default function UserScreen({ navigation }) {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => console.log(user['uid']))
        return unsubscribe;
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.friendsContainer}>
                <Text style={styles.friendsText}>{"Hi " + user['email']}</Text>

            </View>
        </View>
    )
}

