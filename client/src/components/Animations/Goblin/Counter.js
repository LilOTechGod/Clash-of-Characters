import {SpriteAnimator} from 'react-sprite-animator';
import gobCounter from '../../../assets/Monsters/Goblin/Counter.png';
import React from 'react';

const Counter = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobCounter}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Counter