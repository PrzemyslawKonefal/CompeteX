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
    background: #F58C49;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
    transition: box-shadow .3s ease-out;
    
    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    }
    
    &:nth-of-type(4n +1) {
      background: linear-gradient(-90deg, #F58C49 ,#E8C750);
    }
    &:nth-of-type(4n +2) {
      background: linear-gradient(-90deg, #e65343, #F58C49);
    }
    &:nth-of-type(4n +3) {
      background: linear-gradient(-90deg, #C71D6F, #e65343);
    }
    &:nth-of-type(4n +4) {
      background: linear-gradient(-90deg, #c727b9, #C71D6F);
    }
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

const Thumb = styled(ThumbUp)`
  && {
    color: ${props => props.iconColor ? props.iconColor : '#FFF'};
  }
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
        <MainImg src={workout.img || defaultWorkout} alt=""/>
      </MainImgBox>
      <WorkoutInfoBox>
        <SplitBox>
          <Button onClick={() => likeClick(workout.id)}>
            <Thumb iconColor={workout.likes.some(person => person.id === myId) && '#88d34b'}/>
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
