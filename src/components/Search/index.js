import styled from 'styled-components';

const Search = styled.input`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 8px 8px 8px 50px;
  background: rgba(255, 255, 255, 0.23);
  color: #ffffff;
  
  &::placeholder {
    color: #ffffff;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default Search;
