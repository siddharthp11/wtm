import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      display: "flex",
      flex: 1,
    //   justifyContent: 'center', 
      alignItems: 'center',
      height: Dimensions.get("window").height
    },

    textHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    }, 

    inputContainer: {
        width: Dimensions.get("window").width * 0.90,
        height: 55,
        marginTop: 15, 
        marginBottom: 15,
        // paddingLeft: 10,
        // paddingRight: 10,
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
      textAlign: 'center'
    },

    createEventButton: {
        position: 'absolute',
        bottom: 0,
        left: Dimensions.get("window").width * 0.50
    }
});

export default styles