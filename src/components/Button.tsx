import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'

const Button = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => Alert.alert('You have became a host')}>
            <Text style={styles.title}>BECOME A HOST</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#069DFF',
        marginVertical: 10,
        marginHorizontal: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        elevation: 14
    },
    title: {
        fontSize: 16,
        fontFamily: 'SFProText-Semibold',
        color: '#FFFFFF'
    }
})
