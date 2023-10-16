import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        width: "100%",
        height: "100%",
        // alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    modalViewTitleText: {
        // flex: 2,
        color: "lightgreen",
        textShadowColor: "lightgreen",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 30, // Adjust the radius to control the glow intensity
        fontSize: 25,
        margin: 10,
        textAlign: "center",
        justifyContent: 'center',
    },
    modalViewText: {
        justifyContent: 'center',
        textAlign: "center",
        flex: 1,
        color: "lightgreen",
        textShadowColor: "lightgreen",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 10, // Adjust the radius to control the glow intensity
        fontSize: 16,
    },
})

export default styles;