import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ArrowIconProps {
    color: string,
    width: number,
    height: number
}

const ArrowIcon = ({ color, width, height }: ArrowIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 14 23" fill="none">
            <Path
                d="M0.39978 19.669L8.26838 11.56L0.399779 3.45098L2.83407 0.959968L13.1198 11.56L2.83407 22.16L0.39978 19.669Z"
                fill={color}
            />
        </Svg>
    )
}

export default ArrowIcon