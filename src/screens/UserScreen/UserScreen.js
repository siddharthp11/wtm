import { Button, View, Text } from "react-native";
import styles from "./styles";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import { useContext, useEffect } from "react";

export default function UserScreen({ navigation }) {
    const { user, signOut } = useContext(AuthContext)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => console.log(user['uid']))
        return unsubscribe;
    }, [navigation])

    const authSignOut = () => {
        signOut().catch(error => alert(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.friendsContainer}>
                <Text style={styles.friendsText}>{"Hi " + user['email']}</Text>
                <Button title={"Sign Out"} onPress={authSignOut} />
            </View>
        </View>
    )
}

