import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ProfileIconProps {
    color: string,
    width: number,
    height: number
}

const ProfileIcon = ({ color, width, height }: ProfileIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 59 64" fill="none">
            <Path
                d="M53.181 45.409L39.5834 36.6093C39.2074 36.3561 38.7688 36.1029 38.3302 35.913C36.701 35.09 36.513 32.7476 37.9542 31.6714C41.2753 29.1391 43.4684 25.0874 43.4684 20.5293V14.5151C43.5311 6.98158 37.7036 0.524242 30.2468 0.271013C22.4141 0.0177842 15.96 6.34851 15.96 14.1986V20.5293C15.96 25.0874 18.1531 29.1391 21.4742 31.6714C22.9154 32.8109 22.7901 35.09 21.0982 35.913C20.6596 36.1029 20.221 36.3561 19.845 36.6093L6.31009 45.409C-3.71577 51.8031 -0.520031 63.5782 14.3934 63.5782H45.0976C60.0111 63.5782 63.2068 51.8031 53.181 45.409Z"
                fill={color}
            />
        </Svg>
    )
}

export default ProfileIcon