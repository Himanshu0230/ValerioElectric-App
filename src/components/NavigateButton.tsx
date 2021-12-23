import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import NavigateIcon from '../../assets/icons/NavigateIcon'

const NavigateButton = () => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('navigate btn pressed')}>
            <NavigateIcon width={14} height={14} color="#FFFFFF"/>
            <Text style={styles.button}>Navigate</Text>
        </TouchableOpacity>
    )
}

export default NavigateButton

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: "#6BC5FF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 14,
        marginLeft: 30,
    },
    button: {
        fontFamily: 'Roboto-Medium',
        marginHorizontal: 8,
        color: '#FFFFFF',
        fontSize: 10,
        opacity: 0.9
    }
})
