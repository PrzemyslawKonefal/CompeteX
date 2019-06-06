import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 35px auto 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 15px;
  max-width: 1300px;
  
  @media screen and (max-width: 600px) {
    padding: 25px 0;
  }
`;
