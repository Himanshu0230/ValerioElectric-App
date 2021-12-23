import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import RecentSessionsCard from './RecentSessionsCard'
import Swiper from 'react-native-swiper'

const RecentSessions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Recent Sessions</Text>
                <TouchableOpacity style={styles.moreButtonContainer} onPress={() => Alert.alert("more btn pressed")}>
                    <Text style={styles.moreButton}>More</Text>
                    <ArrowIcon width={10} height={10} color="#000000" />
                </TouchableOpacity>
            </View>
            <Swiper paginationStyle={styles.top}>
                <RecentSessionsCard />
                <RecentSessionsCard />
                <RecentSessionsCard />
            </Swiper>
        </View>
    )
}

export default RecentSessions

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontFamily: 'SFProDisplay-Semibold',
        color: '#181725',
        marginHorizontal: 20
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
        top: 170
    }
})
