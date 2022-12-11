import {SpriteAnimator} from 'react-sprite-animator';
import mushCounter from '../../../assets/Monsters/Mushroom/Counter.png';
import React from 'react';

const Counter = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={mushCounter}
            shouldAnimate={true}
            startFrame={0}
            frameCount={11}
            fps={8}
        />
    </div>
  )
}

export default Counter