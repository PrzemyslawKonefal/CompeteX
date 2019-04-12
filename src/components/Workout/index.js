import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Visibility, Comment, Timer, ThumbUp, Receipt
} from '@material-ui/icons';
import defaultWorkout from '../../assets/defaultWorkout.png';

const Wrapper = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 15px 15px 0;
    padding: 0 0 30px 0;
    background: #90ee02;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  `;

const MainImgBox = styled.button`
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 8px 8px 0 0;
    background: #FFFFFF;
  `;

const MainImg = styled.img`
    width: 100%;
    height: 100%;
  `;

const WorkoutInfoBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    padding: 0 8px;
    justify-content: space-between;
    
    svg {
      font-size: 20px !important;
    }
  `;

const SplitBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  
  &:last-of-type {
    padding-right: 20px;
  }
`;

const Number = styled.span`
  font-size: 12px;
  color: #ffffff;
  margin-left:4px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  padding: 0;
`;
const UnclickableBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  padding: 0;
`;

function Workout({ workout, workoutClick, myId, likeClick, tableClick }) {
  const workoutDetails = workout.table && (
    <Button onClick={() => tableClick(workout.id)}>
      <Receipt color="primary"/>
    </Button>
  );
  return (
    <Wrapper>
      <MainImgBox onClick={() => workoutClick(workout.id)}>
        <MainImg src={workout.img || defaultWorkout} alt="Kliknij mnie"/>
      </MainImgBox>
      <WorkoutInfoBox>
        <SplitBox>
          <Button onClick={() => likeClick(workout.id)}>
            <ThumbUp color={workout.likes.some(like => like.id === myId) ? 'primary' : 'secondary'}/>
            <Number>{workout.likes.length}</Number>
          </Button>
          <UnclickableBox>
            <Visibility color="secondary"/>
            <Number>{workout.views}</Number>
          </UnclickableBox>
          <Button onClick={() => workoutClick(workout.id)}>
            <Comment color="secondary"/>
            <Number>{workout.commentsNumber}</Number>
          </Button>
        </SplitBox>
        <SplitBox>
          {workoutDetails}
          <UnclickableBox>
            <Timer color="secondary"/>
            <Number>{workout.duration}</Number>
          </UnclickableBox>
        </SplitBox>
      </WorkoutInfoBox>
    </Wrapper>
  );
}

Workout.propTypes = {
  workout: PropTypes.oneOfType([
    ImmutablePropTypes.map,
    PropTypes.object
  ]),
  workoutClick: PropTypes.func,
  myId: PropTypes.number,
  likeClick: PropTypes.func,
  tableClick: PropTypes.func
};

export default Workout;
