import styled from 'styled-components';
import { Tab as TabPiece } from '@material-ui/core';

export const Wrapper = styled.div`
  padding: 25px;
  
  @media screen and (max-width: 600px) {
    padding: 25px 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  padding-left: 40px;
  border-bottom: 1px solid rgba(26,31,38,0.1);

  p {
      margin-bottom: 4px;
      opacity: 0.5;
      color: #1A1F26;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.11px;
      line-height: 16px;
  }
  h2 {
      position: relative;
      margin: 0 40px 5px 0;
      color: #1A1F26;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 1px;
      line-height: 32px;
  }
  
  @media screen and (max-width: 478px) {
    padding-left: 5px;
  }
`;

export const StickyHeader = styled(Header)`
  position: sticky;
  top: 50px;
  background: #ffffff;
`;

export const Tab = styled(TabPiece)`
    && {
      justify-content: flex-start;
      min-width: unset;
      min-height: 50px;
      margin-right: 20px;
      padding: 0 5px;
      text-transform: capitalize;
      border-radius: 10px 10px 0 0 ;
      
      &:first-of-type {
        padding: 0 5px 0 0;
      }
      
       span {
          flex-direction: row-reverse;
          justify-content: flex-start;
          
          svg {
            fill: rgba(0,0,0,0.71);
          }
          
          span {
            padding: 0 5px 0 0;
            font-size: 18px;
            font-weight: 800;
            color: #000000;
          }
       }
    }
`;
