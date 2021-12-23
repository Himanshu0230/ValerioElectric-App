import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ElectricPumpIcon from '../../assets/icons/ElectricPumpIcon'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import NavigateButton from './NavigateButton'
import ChargeNowButton from './ChargeNowButton'

const ChargingPointsCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.pumpIconContainer}>
                    <ElectricPumpIcon width={45} height={45} color="#069DFF" />
                </View>
                <View style={styles.margin}>
                    <Text style={styles.title}>PlugIn India</Text>
                    <View style={styles.successIconAndInfoContainer}>
                        <SuccessIcon width={16} height={16} color="#21F382" />
                        <Text style={styles.subTitle}>Availabe</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.info}>₹17.5/kWh</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.info}>1.3 Km</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.address}>
                Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi
            </Text>
            <View style={styles.buttonContainer}>
                <NavigateButton />
                <ChargeNowButton />
            </View>
        </View>
    )
}

export default ChargingPointsCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 14,
        elevation: 14,
        backgroundColor: '#FFFFFF'
    },
    subContainer: {
        flexDirection: 'row'
    },
    margin: {
        margin: 10
    },
    pumpIconContainer: {
        marginTop: 14,
        marginLeft: 14
    },
    title: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Regular',
        color: '#000000'
    },
    subTitle: {
        fontFamily: 'Open Sans Regular',
        color: '#333333',
        marginRight: 60,
        fontSize: 11,
        marginLeft: 6
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: "#CAEAFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        paddingHorizontal: 8,
        marginRight: 14,
    },
    info: {
        fontFamily: 'Roboto-Medium',
        color: '#060606',
        fontSize: 10,
    },
    address: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 9,
        color: '#484848',
        marginHorizontal: 30
    },
    successIconAndInfoContainer: {
        flexDirection: 'row', 
        marginTop: 6
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})
