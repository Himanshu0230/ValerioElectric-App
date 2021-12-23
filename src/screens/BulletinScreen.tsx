import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BulletinScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bulletin Screen</Text>
        </View>
    )
}

export default BulletinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: 'black'
    }
})
