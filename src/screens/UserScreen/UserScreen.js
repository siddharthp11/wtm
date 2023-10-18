import UserPopUp from './components/UserPopUp'
import FriendListItem from './components/FriendListItem';

import { TextInput, View, Text, Pressable, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import { useContext, useState } from "react";


export default function UserScreen() {
    const { user, signOut, searchUsers } = useContext(AuthContext);

    const [showUserPopUp, setShowUserPopUp] = useState(false);
    const [loading, setLoading] = useState(false); //two loading state vars: one for search one for friends
    const [searchResults, setSearchResults] = useState([]);
    const fakeData = [{ uid: '1020', email: 'sam@wtm.com' }, { uid: '1222', email: 'ram@wtm.com' }]
    const [searchQuery, setSearchQuery] = useState("");


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
            <View style={styles.userContainer}>
                <TouchableOpacity style={styles.userTouchable} onPress={() => setShowUserPopUp(true)}>
                    <Text style={styles.userText}>{"Hello, " + user["email"] + "."}</Text>
                </TouchableOpacity>
                <UserPopUp visible={showUserPopUp} onClose={() => setShowUserPopUp(false)} />
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    value={searchQuery}
                    placeholder="Search User.."
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => setSearchQuery(text)}

                // onSubmitEditing={loading ? (() => { }) : authSearchUsers}
                />
                <FlatList
                    style={styles.searchList}
                    data={loading ? [] : fakeData}
                    keyExtractor={item => item.uid}
                    renderItem={({ item }) => (
                        <FriendListItem item={item} />
                    )}
                />

            </View>
            <Pressable style={styles.signOutButton} onPress={() => signOut().catch((error) => alert(error))}>
                <Text> Sign Out </Text>
            </Pressable>
        </View>
    );
}
