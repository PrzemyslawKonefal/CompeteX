import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';

const navbarHeight = '64px';

export const SearchGlass = styled(SearchIcon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(0, -50%);
  color: #FFFFFF;
  z-index: 2;
`;

export const SearchBox = styled.div`
  position: relative;
`;

export const NavbarContainer = styled(AppBar)`
  display: flex;
  height: ${navbarHeight};
  padding: 0 24px;
  background: linear-gradient(-90deg, #F58C49, #E65B2A);
  
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const Logo = styled.p`
  padding: 2px;
  margin: 0 50px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  position: static;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

export const SearchUsersList = styled.ul`
  position: fixed;
  top: ${props => props.visible ? navbarHeight : '-100%'};
  left: 0;
  z-index: 100;
  width: 100vw;
  height: calc(100vh - ${navbarHeight});
  background: rgba(144,238,2,0.1);
`;

