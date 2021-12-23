import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import InfoBanner from '../components/InfoBanner'
import { Switch } from 'react-native-switch'

const ChargeScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Header title='Charging Status' backgroundText='Status' height='15%' padForBackText={40} />
            <View style={styles.infoBannerContainer}>
                <InfoBanner title="Time" subtitle='Charged' data="2h 35min" color="#4B5358" />
                <InfoBanner title="Energy" subtitle='Consumed' data="17.40 kWh" color="#03AD70" />
                <InfoBanner title="Amount" subtitle='Payable' data="₹148.45" color="#2D9CDB" />
            </View>
            <View style={styles.switchContainer}>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}

export default ChargeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    switchContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    infoBannerContainer: {
        marginTop: 30
    }
})
