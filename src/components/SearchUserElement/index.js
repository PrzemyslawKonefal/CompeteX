import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled(NavLink)`
  display: block;
  height: 60px;
  width: 100%;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(144,238,2,0.2);
  }
  `;

function SearchUserElement({user}) {
  return (
    <Wrapper
      to={`/users/${user.id}`}
    >
      {user.firstName}
    </Wrapper>
  );
}

export default SearchUserElement;
