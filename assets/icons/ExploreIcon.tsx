import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ExploreIconProps {
    color: string,
    width: number,
    height: number
}

const ExploreIcon = ({color, width, height}: ExploreIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
            <Path
                d="M31.9852 0C14.3484 0 0 14.3484 0 31.9852C0 49.6221 14.3484 63.9704 31.9852 63.9704C49.6221 63.9704 63.9704 49.6221 63.9704 31.9852C63.9704 14.3484 49.6221 0 31.9852 0ZM44.5582 19.7635L37.5077 36.8024C37.3712 37.133 37.1074 37.3946 36.7768 37.5297L19.7052 44.5013C19.5196 44.5767 19.3355 44.3918 19.4115 44.2062L26.462 27.1673C26.5985 26.8367 26.8623 26.5751 27.1929 26.44L44.2645 19.4684C44.4501 19.3931 44.635 19.5786 44.5582 19.7635Z"
                fill={color}
            />
        </Svg>
    )
}

export default ExploreIcon