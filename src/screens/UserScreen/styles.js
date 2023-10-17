import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    rootContainer: {
        paddingVertical: 50,
        alignItems: 'center',
        backgroundColor: "black",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",

    },
    userText: {
        marginTop: 10,
        color: 'white',
        flex: 0.5,
        fontSize: 20
    },
    searchContainer: {
        width: "80%",
        flexDirection: "column",
        flex: 3,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderColor: 'white'

    },
    searchBar: {
        color: 'white',
        borderWidth: 1,
        padding: 10,
        borderColor: 'white'
    },
    searchList: {
        padding: 10,
    },
    signOutButton: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'white',
    }

})