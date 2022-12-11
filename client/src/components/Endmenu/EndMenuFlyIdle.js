import {SpriteAnimator} from 'react-sprite-animator';
import flyIdle from '../../assets/Monsters/FlyingEye/Idle.png';
import React from 'react';

const EndMenuFlyIdle = () => {
  return (
    <div>
        <SpriteAnimator
            width={150}
            height={150}
            scale={.25}
            sprite={flyIdle}
            shouldAnimate={true}
            startFrame={0}
            frameCount={16}
            fps={16}
        />
    </div>
  )
}

export default EndMenuFlyIdle