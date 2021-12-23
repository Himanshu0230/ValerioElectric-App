import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface NavigateIconProps {
    color: string,
    width: number,
    height: number
}

const NavigateIcon = ({ color, width, height }: NavigateIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 37 37" fill="none" style={{ opacity: 0.9 }}>
            <Path
                d="M34.8411 0.41272L0.811157 14.5205C-0.270386 14.9831 -0.270386 16.5249 0.811157 16.9489L13.8669 22.3068C14.1759 22.4225 14.4463 22.6923 14.6008 23.0392L19.9699 36.0677C20.4334 37.147 21.9785 37.147 22.4034 36.0677L36.5793 2.14729C37.0428 1.02946 35.9613 -0.0498313 34.8411 0.41272Z"
                fill={color}
            />
        </Svg>
    )
}

export default NavigateIcon