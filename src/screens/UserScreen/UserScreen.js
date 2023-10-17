import { TextInput, View, Text, Pressable, FlatList } from "react-native";
import styles from "./styles";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserScreen({ navigation }) {
    const { user, signOut, searchUsers } = useContext(AuthContext);

    const [loading, setLoading] = useState(false); //two loading state vars: one for search one for friends
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const authSignOut = () => {
        signOut().catch((error) => alert(error));
    };

    const authSearchUsers = () => {
        setLoading(true);
        searchUsers(searchQuery)
            .then((userMatches) => { setSearchResults(userMatches) })
            .catch((error) => alert(error))
            .finally(() => {
                setLoading(false)
            });
    };

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.userText}>{"Hello, " + user["email"] + "."}</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    value={searchQuery}
                    placeholder="Users by Email (No Search) -"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => setSearchQuery(text)}
                    onSubmitEditing={loading ? (() => { }) : authSearchUsers}
                />
                <FlatList
                    style={styles.searchList}
                    data={loading ? [] : searchResults}
                    keyExtractor={item => item.uid}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={{ color: 'white' }}>{item.email}</Text>
                        </View>
                    )}
                />

            </View>
            <Pressable style={styles.signOutButton} onPress={authSignOut}>
                <Text> Sign Out </Text>
            </Pressable>
        </View>
    );
}
