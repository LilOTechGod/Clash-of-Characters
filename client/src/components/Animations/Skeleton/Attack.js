import {SpriteAnimator} from 'react-sprite-animator';
import skeleAttack from '../../../assets/Monsters/Skeleton/Attack.png';
import React from 'react';

const Attack = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={skeleAttack}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Attack