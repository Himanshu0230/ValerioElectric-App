import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import ChargeNowIcon from '../../assets/icons/ChargeNowIcon'

const ChargeNowButton = () => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert("charge now btn pressed")}>
            <ChargeNowIcon width={14} height={14} color="#FFFFFF"/>
            <Text style={styles.button}>Charge Now</Text>
        </TouchableOpacity>
    )
}

export default ChargeNowButton

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
        marginLeft: 20,
    },
    button: {
        fontFamily: 'Roboto-Medium',
        marginHorizontal: 2,
        color: '#FFFFFF',
        fontSize: 10,
        opacity: 0.9
    }
})