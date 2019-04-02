import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchGlass = styled(SearchIcon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(0, -50%);
  color: #000000;
`;

export default SearchGlass;
