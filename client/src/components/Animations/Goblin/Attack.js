import {SpriteAnimator} from 'react-sprite-animator';
import gobAttack from '../../../assets/Monsters/Goblin/Attack.png';
import React from 'react';

const Attack = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={gobAttack}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Attack