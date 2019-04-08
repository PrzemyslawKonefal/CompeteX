import React from 'react';
import styled from 'styled-components';
import defaultWorkout from '../../assets/defaultWorkout.png';

const Wrapper = styled.button`
    width: 300px;
    height: 300px;
    margin: 0 25px 0 0;
    background: #FFFFFF;
  `;

const Img = styled.img`
    width: 300px;
    height: 300px;
    background: #FFFFFF;
    border: none;
  `;

function Workout({ workout, workoutClick }) {
  return (
    <Wrapper onClick={workoutClick}>
      <Img src={workout.img || defaultWorkout} />
    </Wrapper>
  );
}

export default Workout;
