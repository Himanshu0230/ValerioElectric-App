import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TransparentChargeIcon from '../../assets/icons/TransparentChargeIcon'

interface HeaderProps {
    backgroundText?: string,
    title?: string,
    subTitle?: string
    height?: string,
    padForBackText: number,
}

const Header = ({ backgroundText, title, subTitle, height, padForBackText} : HeaderProps) => {
    return (
        <View style={[styles.container, {height: height}]}>
            <TransparentChargeIcon width={150} height={150} color="#FFFFFF"/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={[styles.backgroundText, {paddingTop: padForBackText}]}>{backgroundText}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#069DFF',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'SFProText-Bold',
        fontSize: 30,
        color: '#FFFFFF',
        paddingLeft: 20,
    },
    subTitle: {
        fontFamily: 'SFProText-Regular',
        fontSize: 16,
        color: '#FFFFFF',
        paddingLeft: 20,
    },
    backgroundText: {
        fontSize: 70,
        fontFamily: 'SFProText-Heavy',
        position: 'absolute',
        color: '#FFFFFF',
        alignSelf: 'flex-end',
        opacity: 0.2,
    }
})
