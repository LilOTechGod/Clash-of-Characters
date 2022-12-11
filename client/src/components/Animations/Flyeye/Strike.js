import {SpriteAnimator} from 'react-sprite-animator';
import flyStrike from '../../../assets/Monsters/FlyingEye/Strike.png'
import React from 'react'

const Strike = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={flyStrike}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Strike