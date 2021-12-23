import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ChargeNowIconProps {
    color: string,
    width: number,
    height: number
}

const ChargeNowIcon = ({ color, width, height }: ChargeNowIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 36" fill="none" style={{ opacity: 0.9 }}>
            <Path
                d="M6.2564 19.522L2.33568 35.0155L15.061 13.7236L7.55762 12.7676L11.3437 1.58748L3.35102 0.569117L0.936178 18.8441L6.2564 19.522Z"
                fill={color}
                fill-opacity="0.79"
            />
        </Svg>
    )
}

export default ChargeNowIcon