import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import NavigateButton from './NavigateButton'
import ChargeNowButton from './ChargeNowButton'

const RecentSeesionsCard = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>PlugIn India</Text>
                    <View style={styles.successIconAndInfoContainer}>
                        <SuccessIcon width={14} height={14} color="#21F382" />
                        <Text style={styles.subTitle}>Availabe</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.info}>₹500</Text>
                        </View>
                        <View style={styles.infoContainer1}>
                            <Text style={styles.info}>7.4 kWh</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.address}>
                    Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi
                </Text>
                <View style={styles.keyValueContainer}>
                    <Text style={styles.keyStyle}>
                        Last Charged:
                        <Text style={styles.valueStyle}>    3 Days ago</Text>
                    </Text>
                    <Text style={styles.key1Style}>
                        Operator:
                        <Text style={styles.valueStyle}>    veCharge Community</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <NavigateButton />
                <ChargeNowButton />
            </View>
        </View>
    )
}

export default RecentSeesionsCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 14,
        elevation: 14,
        backgroundColor: '#FFFFFF'
    },
    subContainer: {
        marginTop: 10, marginLeft: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Medium',
        color: '#000000',
        marginLeft: 4,
    },
    subTitle: {
        fontFamily: 'Open Sans Regular',
        color: '#333333',
        marginRight: 130,
        fontSize: 10,
        marginLeft: 6
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: "#00A2FD",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        paddingHorizontal: 16,
        paddingVertical: 2,
        marginRight: 10,
    },
    info: {
        fontFamily: 'SFProDisplay-Medium',
        color: '#FFFFFF',
        fontSize: 9
    },
    infoContainer1: {
        flexDirection: 'row',
        backgroundColor: "#05C07D",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    address: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 9,
        color: '#484848',
        flex: 1/2,
        marginLeft: 12, 
        marginTop: 10,
        marginRight: 40
    },
    keyStyle: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#000000',
        fontSize: 9,
        marginTop: 10
    },
    valueStyle: {
        fontFamily: 'SFProDisplay-Medium',
        color: '#333333',
        fontSize: 9,
    },
    key1Style: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#000000',
        fontSize: 10,
    },
    successIconAndInfoContainer: {
        flexDirection: 'row', 
        marginTop: 4
    }, 
    textContainer: {
        flexDirection: 'row', 
        width: '100%'
    },
    keyValueContainer: {
        flex: 1/2
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})