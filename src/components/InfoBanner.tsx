import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ClockIcon from '../../assets/icons/ClockIcon';
import BatteryIcon from '../../assets/icons/BatteryIcon';
import RuppeIcon from '../../assets/icons/RuppeIcon'



interface InfoBannerProps {
    title?: string,
    subtitle?: string,
    data?: string,
    color?: string
}

const InfoBanner = ({ title, subtitle, data, color }: InfoBannerProps) => {

    let icon;
    if (title === 'Time') {
        icon = <ClockIcon width={18} height={18} color="white" />
    }

    if (title === 'Energy') {
        icon = <BatteryIcon width={20} height={20} color="white" />
    }

    if (title === 'Amount') {
        icon = <RuppeIcon width={18} height={16} color="white" />
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.flexDirection}>
                <View style={styles.iconContainer}>
                    <View style={styles.subContainer} />
                    <View>
                        {icon}
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subtitle}</Text>
                </View>
                <Text style={styles.dataStyle}>{data}</Text>
            </View>
        </View>
    )
}

export default InfoBanner

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 70,
        padding: 20,
        elevation: 14,
        borderRadius: 10
    },
    iconContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 8,
        marginRight: 8
    },
    title: {
        fontSize: 16,
        fontFamily: 'SFProDisplay-Medium',
        color: '#FFFFFF'
    },
    subTitle: {
        fontSize: 12,
        fontFamily: 'SFProDisplay-Regular',
        color: '#FFFFFF'
    },
    subContainer: {
        padding: 18,
        backgroundColor: 'white',
        opacity: 0.2,
        borderRadius: 10,
        position: 'absolute',
    },
    dataStyle: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 13,
        marginLeft: 34
    },
    flexDirection: {
        flexDirection: 'row'
    }
})
