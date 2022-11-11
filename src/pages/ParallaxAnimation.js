import React  from 'react'
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.scss';

function ParallaxAnimation() {

  return (
    <div>
      <h1>Parallax Animation</h1>

      <Parallax pages={2} style={{ top: '100', left: '0', height: '70%' }}>
        <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{ 
              maxHeight: '1000px',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' ,
              backgroundColor: '#b798ab'
              }}>
            <p>Scroll Down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ffb8b8' }} />

        <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            }}>
            <p>Scroll Up</p>
        </ParallaxLayer>
        </Parallax>

    </div>
  )
}

export default ParallaxAnimation
