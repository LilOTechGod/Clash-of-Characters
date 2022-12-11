import {SpriteAnimator} from 'react-sprite-animator';
import flyCounter from '../../../assets/Monsters/FlyingEye/Counter.png';
import React from 'react';

const Counter = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={flyCounter}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Counter