import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import ChargingPointsCard from './ChargingPointsCard'
import Swiper from 'react-native-swiper'

const ChargingPoints = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Charging Points Near Me</Text>
                <TouchableOpacity style={styles.moreButtonContainer} onPress={() => Alert.alert("more btn pressed")}>
                    <Text style={styles.moreButton}>More</Text>
                    <ArrowIcon width={10} height={10} color="#000000" />
                </TouchableOpacity>
            </View>
            <Swiper paginationStyle={styles.top}>
                <ChargingPointsCard />
                <ChargingPointsCard />
                <ChargingPointsCard />
            </Swiper>
        </View>
    )
}

export default ChargingPoints

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10
    },
    headerContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontFamily: 'SFProDisplay-Semibold',
        color: '#181725',
        marginLeft: 20,
        marginRight: 10
    },
    moreButtonContainer: {
        flexDirection: 'row',
        backgroundColor: "#CAEAFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginVertical: 8
    },
    moreButton: {
        fontFamily: 'Roboto-Regular',
        marginRight: 8,
        color: 'black',
        fontSize: 12
    },
    top: {
        top: 150
    }
})
