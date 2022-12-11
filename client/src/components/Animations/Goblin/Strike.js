import {SpriteAnimator} from 'react-sprite-animator';
import gobStrike from '../../../assets/Monsters/Goblin/Strike.png'
import React from 'react'

const Strike = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobStrike}
            shouldAnimate={true}
            startFrame={0}
            frameCount={12}
            fps={12}
        />
    </div>
  )
}

export default Strike