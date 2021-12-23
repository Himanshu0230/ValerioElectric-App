import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface BatteryIconProps {
    color: string,
    width: number,
    height: number
}

const BatteryIcon = ({ color, width, height }: BatteryIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 49 29" fill="none">
            <Path
                d="M46.7153 16.5789V12.5757"
                stroke={color}
                strokeWidth="4.00321"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.6831 26.5857H6.67985C5.61813 26.5857 4.5999 26.1639 3.84915 25.4132C3.0984 24.6624 2.67664 23.6442 2.67664 22.5825V6.56962C2.67664 5.5079 3.0984 4.48967 3.84915 3.73892C4.5999 2.98817 5.61813 2.56641 6.67985 2.56641H13.065M30.6991 2.56641H34.7023C35.7641 2.56641 36.7823 2.98817 37.533 3.73892C38.2838 4.48967 38.7055 5.5079 38.7055 6.56962V22.5825C38.7055 23.6442 38.2838 24.6624 37.533 25.4132C36.7823 26.1639 35.7641 26.5857 34.7023 26.5857H28.3172"
                stroke={color}
                strokeWidth="4.00321"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M22.6937 2.56644L14.6873 14.5761H26.6969L18.6905 26.5857"
                stroke={color}
                strokeWidth="4.00321"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default BatteryIcon