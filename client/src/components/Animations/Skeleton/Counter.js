import {SpriteAnimator} from 'react-sprite-animator';
import skeleCounter from '../../../assets/Monsters/Skeleton/Counter.png';
import React from 'react';

const Counter = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={skeleCounter}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Counter