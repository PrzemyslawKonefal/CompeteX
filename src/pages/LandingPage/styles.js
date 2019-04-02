import styled from 'styled-components';

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
