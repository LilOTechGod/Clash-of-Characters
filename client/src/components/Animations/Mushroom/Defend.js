import {SpriteAnimator} from 'react-sprite-animator';
import mushDefend from '../../../assets/Monsters/Mushroom/Defend.png';
import React from 'react';

const Defend = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={mushDefend}
            shouldAnimate={true}
            startFrame={0}
            frameCount={4}
            fps={8}
        />
    </div>
  )
}

export default Defend