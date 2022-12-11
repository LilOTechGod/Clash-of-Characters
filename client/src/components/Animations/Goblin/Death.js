import {SpriteAnimator} from 'react-sprite-animator';
import gobDeath from '../../../assets/Monsters/Goblin/Death.png';
import React from 'react';

const Death = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobDeath}
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