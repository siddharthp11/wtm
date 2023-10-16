import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flexDirection: "column",
        flex: 1,
        padding: 20,
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
        // height: Dimensions.get("window").height,
        height: "100%",
        // position: "absolute",
        // top: 0,
    },
    list: {
        // position: "absolute",
        width: 1.0 * windowWidth,
        // alignItems: 'center'
    },
    listItem: {
        flex: 1,
        justifyContent: "center",
        // alignContent: 'center',
        // marginTop: 10,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        // width: 0.8 * 0.9 * windowWidth,
        height: 0.1 * windowHeight,
        color: "orange",
        borderColor: "orange",
        borderRadius: 5,
        borderWidth: 1,
        margin: 10,
        // shadowColor: "orange",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 1,
        // },
    },
    textInListItem: {
        textAlign: "center", // Center text horizontally
        fontSize: 20,
        color: "orange",
        textShadowColor: "orange",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 30, // Adjust the radius to control the glow intensity
        paddingTop: 8,
    },
    dateInListItem: {
        color: "white",
        textShadowColor: "white",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 30, // Adjust the radius to control the glow intensity
        fontSize: 12,
        margin: 10,
        textAlign: "center",
    },
    createEventButton: {
        position: "absolute",
        bottom: 10,
        right: 10,
        // margin: 20,
        width: 100, // or adjust the width as needed
        height: 100, // or adjust the height as needed
        // borderRadius: 40, // to make it a circle
        // backgroundColor: 'blue', // customize the background color
        // alignItems: 'center',
        // justifyContent: 'center',
        fill: "none",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 20,
        width: "80%",
        height: "80%",
        // alignItems: "center",
        borderColor: "white",
        borderWidth: 1,
        elevation: 5, // Set the shadow depth/intensity
        shadowColor: "black", // Set the shadow color
    },
    modalViewTitleText: {
        // flex: 2,
        color: "orange",
        textShadowColor: "orange",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 30, // Adjust the radius to control the glow intensity
        fontSize: 25,
        margin: 10,
        textAlign: "center",
    },
    modalViewText: {
        margin: 5,
        marginLeft: 15,
        // flex: 1,
        color: "orange",
        textShadowColor: "orange",
        textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
        textShadowRadius: 10, // Adjust the radius to control the glow intensity
        fontSize: 16,
    },
    modalViewCloseButtonView: {
        position: "absolute",
        margin: 5,
        width: "10%",
        height: "10%",
        top: 5,
        left: 5,
        // backgroundColor: "red",
    },
    modalViewMoveButtonView: {
        position: "absolute",
        margin: 5,
        alignSelf: "center", // Horizontally centered
        width: "100%",
        // transform: "translateX(-50%)",
        height: 40,
        bottom: 10,
        right: 10,
        flex: 1,
        alignContent: "center",
    },
    mapContainer: {
        // margin: 5,
        marginTop: 40,
        marginBottom: 20,
        // alignItems: "center",
        // flex: 3,
        width: "100%",
        height: "50%",
        // backgroundColor: "black",
    },
});

export default styles;
