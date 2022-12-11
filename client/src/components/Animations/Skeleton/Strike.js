import {SpriteAnimator} from 'react-sprite-animator';
import skeleStrike from '../../../assets/Monsters/Skeleton/Strike.png'
import React from 'react'

const Strike = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={skeleStrike}
            shouldAnimate={true}
            startFrame={0}
            frameCount={6}
            fps={8}
        />
    </div>
  )
}

export default Strike