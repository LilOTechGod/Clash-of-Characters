import {SpriteAnimator} from 'react-sprite-animator';
import gobIdle from '../../../assets/Monsters/Goblin/Idle.png';
import React from 'react';

const Idle = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobIdle}
            shouldAnimate={true}
            startFrame={0}
            frameCount={4}
            fps={8}
        />
    </div>
  )
}

export default Idle