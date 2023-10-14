import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        display:"flex",
        flex:1,
    }
})

const StartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                START SCREEN
            </Text>
        </View>
    )
}

export default StartScreen