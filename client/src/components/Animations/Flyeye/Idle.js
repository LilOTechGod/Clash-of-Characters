import {SpriteAnimator} from 'react-sprite-animator';
import flyIdle from '../../../assets/Monsters/FlyingEye/Idle.png';
import React from 'react';

const Idle = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.6}
            sprite={flyIdle}
            shouldAnimate={true}
            startFrame={0}
            frameCount={8}
            fps={8}
        />
    </div>
  )
}

export default Idle