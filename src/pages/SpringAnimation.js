import React, {useState} from 'react';
import { Link } from "react-router-dom";
import logo from './../logo.svg';
import { animated, useSpring } from '@react-spring/web'
import './index.scss';

function FadeAnimation() {
  
  const [flip, setFlip] = useState(false);
  const fade = useSpring({
    to: { opacity: 1 }, // fully visible
    from: { opacity: 0 }, // hidden
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => setFlip(!flip), // change flip false to true, true to false
  });

  const slide = useSpring({
    loop: true,
    from: { y:50 },
    to: { y: -50 },
    config: { duration: 1500 }
    });

  const spin = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 }
  });

  const reverse = useSpring({
    loop: { reverse: true },
    from: { x: -200 },
    to: { x: 100 },
    config: { duration: 1500 }
  });

  return (
    <div className="animation-fade">
      
      <h1>React Spring Animation</h1>

      <p>Fade</p>
      <animated.div style={fade}>
        <img src={logo} alt="logo" className="App-logo"/>
      </animated.div>

      <p>Slide</p>
      <animated.div style={slide}>
        <img src={logo} alt="logo" className="App-logo"/>
      </animated.div>

      <p>Spin</p>
      <animated.div style={spin}>
        <img src={logo} alt="logo" className="App-logo"/>
      </animated.div>

      <p>Reverse</p>
      <animated.div style={reverse}>
        <img src={logo} alt="logo" className="App-logo"/>
      </animated.div>
      
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default FadeAnimation
