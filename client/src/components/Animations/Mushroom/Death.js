import {SpriteAnimator} from 'react-sprite-animator';
import mushDeath from '../../../assets/Monsters/Mushroom/Death.png';
import React from 'react';

const Death = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={mushDeath}
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