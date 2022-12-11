import {SpriteAnimator} from 'react-sprite-animator';
import flyDeath from '../../../assets/Monsters/FlyingEye/Death.png';
import React from 'react';

const Death = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={flyDeath}
            shouldAnimate={true}
            stopLastFrame={true}
            startFrame={0}
            frameCount={4}
            fps={8}
        />
    </div>
  )
}

export default Death