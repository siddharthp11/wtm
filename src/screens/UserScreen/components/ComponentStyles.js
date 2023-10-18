import { StyleSheet } from "react-native";

const UserPopUpStyles = StyleSheet.create({
    popUpParentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popUpContainer: {
        flexDirection: 'column',
        width: '80%',
        height: '50%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'black',
        borderColor: 'white'
    },
    popUpTextContainer: {
        flex: 1,
        width: "100%",
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'blue',
        // borderWidth: 1,
        // borderColor: 'white'
    },
    popUpListContainer: {
        flex: 5,
        width: "100%",
        padding: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        // borderWidth: 1,
        // borderColor: 'white'

    },

    closeButtonContainer: {
        flex: 1,
        width: "40%",
        borderRadius: 35,

        // borderColor: 'white',
        backgroundColor: 'pink'

    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

const FriendListItemStyles = StyleSheet.create({
    friendContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0.5,
        marginBottom: 7,
        borderColor: 'grey',
    },
    friendTextContainer: {
        flex: 3,
        padding: 7,
        backgroundColor: 'purple',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextContainer: {
        padding: 7,
    },
})

export { UserPopUpStyles, FriendListItemStyles }