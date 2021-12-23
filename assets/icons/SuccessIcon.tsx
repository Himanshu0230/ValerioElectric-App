import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface SuccessIconProps {
    color: string,
    width: number,
    height: number
}

const SuccessIcon = ({ color, width, height }: SuccessIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 42 42" fill="none">
            <Path
                d="M34.3144 14.4226L19.5163 30.1578C19.0724 30.6299 18.4896 30.8675 17.9068 30.8675C17.3241 30.8675 16.7413 30.6299 16.2973 30.1578L8.89849 22.2902C8.00808 21.3438 8.00808 19.8137 8.89849 18.8673C9.78849 17.9204 11.2271 17.9204 12.1175 18.8673L17.9068 25.0234L31.0954 10.9997C31.9854 10.0529 33.424 10.0529 34.3144 10.9997C35.2044 11.9461 35.2044 13.4758 34.3144 14.4226Z"
                fill={color}
            />
        </Svg>
    )
}

export default SuccessIcon