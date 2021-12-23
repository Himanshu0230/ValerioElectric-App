import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Button from '../components/Button'
import ChargingPoints from '../components/ChargingPoints'
import RecentSessions from '../components/RecentSessions'


const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Header title='Hello Moksh,' subTitle="Let's Charge your Vehicle" backgroundText='Charge' height='22%' padForBackText={70} />
            <Button />
            <ChargingPoints />
            <RecentSessions />
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    }
})
