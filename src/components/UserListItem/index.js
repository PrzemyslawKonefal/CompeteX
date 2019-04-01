import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../../styles/styleMap';
import { textEllipsis } from '../../helpers/functions';

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  height: 205px;
  width: 500px;
  margin: 0 30px;
  border-radius: 8px;
  background: ${props => props.theme};
  
  &:first-of-type {
    margin-left: 0;
  }
  
  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 99%;
    height: 99%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }
`;

const HeroImage = styled.img`
  position: relative;
  bottom: 25px;
  height: 230px;
`;
const HeroData = styled.div`
  padding: 30px 0 33px 40px;
`;
const Name = styled.p`
  height: 24px;
  max-width: 265px;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 24px;
  color: #1A1F26;
  overflow: hidden;
`;

const Labels = styled.div`
  display: flex;
  margin: 8px 0 0 0;
`;

const Label = styled.p`
  margin: 0 10px 0 0;
  padding: 1px 6px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  background-color: #FFFFFF;
  box-shadow: 0 4px 10px 0 rgba(26, 31, 38, 0.3);
  color: #1A1F26;
  
  &:nth-of-type(2n) {
    background-color: #1A1F26;
    box-shadow: 0 4px 10px 0 rgba(26, 31, 38, 0.3);
    color: #FFFFFF;
  }
`;

const LastActive = styled.p`
  height: 13px;
  margin: 8px 0 0 0;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
`;

const Description = styled.p`
  height: 36px;
  width: 285px;
  margin: 10px 0;
  color: rgba(26, 31, 38, 0.5);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  overflow: hidden;
`;

const Workouts = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;
`;

const WorkoutImage = styled.img`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  height: 29px;
  width: 29px;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  background-color: #D8D8D8;

  &:nth-of-type(2) {
    right: 8px;
  }

  &:nth-of-type(3) {
    right: 16px;
  }

  &:nth-of-type(4) {
    right: 24px;
  }

  &:nth-of-type(5) {
    right: 32px;
  }
`;

const WorkoutCounter = styled.p`
  position: relative;
  right: 32px;
  margin: 0 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.13px;
  line-height: 19px;
  color: #1A1F26;
`;

class UserListItem extends PureComponent {
  render() {
    const { workouts, style, img, firstName, lastName, lastActive, bio, workoutsNumber, labels } = this.props.user;
    const imagesSources = workouts.map(workout => workout.img);
    for (let i = imagesSources.length; i < 5; i++) {
      imagesSources.push(i);
    }
    const workoutImages = imagesSources.map(image => <WorkoutImage src={image} alt="" key={image}/>);
    const displayName = `${firstName} ${lastName}`;
    const labelsList = labels.map(label => (
      <Label key={label}>{label}</Label>
    ));

    return (
      <Wrapper theme={styles[style]}>
        <HeroData>
          <Name>{displayName}</Name>
          <Labels>
            {labelsList}
          </Labels>
          <LastActive>{`Ostatnia aktywność ${lastActive}`}</LastActive>
          <Description>{textEllipsis(bio, 70)}</Description>
          <Workouts>
            {workoutImages}
            <WorkoutCounter>{`${workoutsNumber} total`}</WorkoutCounter>
          </Workouts>
        </HeroData>
        <HeroImage src={img}/>
      </Wrapper>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.object
};

export default UserListItem;
