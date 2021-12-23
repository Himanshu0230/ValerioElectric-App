import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface TransparentChargeIconProps {
    color: string,
    width: number,
    height: number
}

const TransparentChargeIcon = ({ color, width, height }: TransparentChargeIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="55 0 229 395" fill="none" style={{ opacity: 0.4, position: 'absolute' }}>
            <Path
                d="M84.3343 218.375L-34.2605 394.653L220.498 185.205L130.932 139.703L228.479 16.7791L133.072 -31.6895L20.828 186.113L84.3343 218.375Z"
                fill={color}
            />
        </Svg>
    )
}

export default TransparentChargeIcon