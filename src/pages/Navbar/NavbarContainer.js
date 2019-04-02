import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const NavbarContainer = styled(AppBar)`
  display: flex;
  height: 64px;
  padding: 0 24px;
  
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export default NavbarContainer;
