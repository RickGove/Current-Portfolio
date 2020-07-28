import styled from 'styled-components';

import DiceOne from '../faces/dice-1.png';
import DiceTwo from '../faces/dice-2.png';
import DiceThree from '../faces/dice-3.png';
import DiceFour from '../faces/dice-4.png';
import DiceFive from '../faces/dice-5.png';
import DiceSix from '../faces/dice-6.png';

const size = 80;
const fullSize = `${size}px`;
const halfSize = `${size / 2}px`;

export const DiceWrap = styled.div`
	height: 85px;
  width: 85px;

  .cube{
  margin-top:80px;
  margin:auto;
  width:${fullSize};
  height:${fullSize};
  /*position:relative;*/
  transform-style: preserve-3d;
}

.cube-face {
  width: ${fullSize};
  height: ${fullSize};
  position: absolute;
}

.front-face{
  background:red;
  transform:translate3d(0,0,40px);
  /*border-radius:20px;*/
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  background: url(${DiceOne});
  background-size: contain;
}

.back-face{
  background:yellow;
  transform:rotateY(180deg) translate3d(0,0,40px);
    /*border-radius:20px;*/
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: url(${DiceTwo});
    background-size: contain;
}

.left-face{
  background: orange;
  transform: rotateY(-90deg) translate3d(0, 0, 40px);
    /*border-radius:20px;*/
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: url(${DiceThree});
    background-size: contain;
}

.right-face{
  background:lime;
  transform: rotateY(90deg) translate3d(0, 0, 40px);
    /*border-radius:20px;*/
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: url(${DiceFour});
    background-size: contain;
}

.top-face {
  background:blue;
  transform: rotateX(90deg) translate3d(0, 0, 40px);
    /*border-radius:20px;*/
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: url(${DiceFive});
    background-size: contain;
}

.bottom-face {
  background:magenta;
  transform: rotateX(-90deg) translate3d(0, 0, 40px);
    /*border-radius:20px;*/
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: url(${DiceSix});
    background-size: contain;
}
	}
`;
