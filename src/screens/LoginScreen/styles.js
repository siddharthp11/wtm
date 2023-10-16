import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    wtmText: {
        fontSize: 90,
        marginTop: 0.15 * windowHeight,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
    },
    loginCardContainer: {
        flex: 1,
        top: 0.05 * windowHeight,
        alignItems: "center",
        backgroundColor: "black",
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
        color: "white",
    },
    buttonContainer: {
        width: 0.4 * windowWidth,
        height: 0.07 * windowHeight,
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: "black",
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
    },
});
