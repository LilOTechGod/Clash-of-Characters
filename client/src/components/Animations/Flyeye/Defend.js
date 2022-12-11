import {SpriteAnimator} from 'react-sprite-animator';
import flyDefend from '../../../assets/Monsters/FlyingEye/Defend.png';
import React from 'react';

const Defend = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={flyDefend}
            shouldAnimate={true}
            startFrame={0}
            frameCount={4}
            fps={8}
        />
    </div>
  )
}

export default Defend