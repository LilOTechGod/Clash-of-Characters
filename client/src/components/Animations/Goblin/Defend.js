import {SpriteAnimator} from 'react-sprite-animator';
import gobDefend from '../../../assets/Monsters/Goblin/Defend.png';
import React from 'react';

const Defend = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobDefend}
            shouldAnimate={true}
            startFrame={0}
            frameCount={4}
            fps={8}
        />
    </div>
  )
}

export default Defend