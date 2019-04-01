import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 10px 0 rgba(26, 31, 38, 0.1);
  transform: translateY(-50%);
  outline: none;
  cursor: pointer;
  
  ${({ direction }) => direction === 'left'
    ? 'left: -50px;'
    : 'right: -50px;'}
  
  ${({ hidden }) => hidden && 'display: none;'}
  `;

const Arrow = styled.span`
  display: block;
  box-sizing: border-box;
  height: 13px;
  width: 13px;
  border-top: 2px solid #1aa6ff;
  border-right: 2px solid #1aa6ff;
  
  ${({ direction }) => direction === 'left'
    ? `float: right;
      margin-right: 15px;
      transform: rotate(225deg);`
    : `margin-left: 15px;
      transform: rotate(45deg);`}
`;

/**
 * @Button triggering the tournament slider
 *
 * @param {string} direction - arrow direction
 * @param {function} buttonClick - function that handles button click
 * @param {boolean} hidden - button visibility
 */
function SlideTrigger({ direction, buttonClick, hidden = false }) {
  console.log(direction)
  return (
    <Wrapper
      onClick={buttonClick}
      direction={direction}
      hidden={hidden}
    >
      <Arrow direction={direction}/>
    </Wrapper>
  );
}

export default SlideTrigger;
