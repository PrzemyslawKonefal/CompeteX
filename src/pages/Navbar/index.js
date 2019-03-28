import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { DefaultTheme } from '../../styles/global-styles';
import Logo from './Logo';
import NavbarContainer from './NavbarContainer';
import CategoryWrapper from './CategoryWrapper';
import Categories from './Categories';
import Search from '../../components/Search';
import Badge from '../../components/Badge';
import SearchBox from './SearchBox';
import SearchIcon from './SearchIcon';

export default class FeaturePage extends React.Component {
  state = { searchInput: '' };

  handleSearchChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <MuiThemeProvider theme={DefaultTheme}>
        <NavbarContainer position="fixed" color="primary">
          <Categories>
            <CategoryWrapper>
              <IconButton>
                <MenuIcon color="secondary" />
              </IconButton>
              <Logo> CompeteX </Logo>
              <SearchBox>
                <SearchIcon />
                <Search
                  onChange={this.handleSearchChange}
                  placeholder="Search..."
                />
              </SearchBox>
            </CategoryWrapper>
            <CategoryWrapper>
              <IconButton color="inherit">
                <AddIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={1}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </CategoryWrapper>
          </Categories>
        </NavbarContainer>
      </MuiThemeProvider>
    );
  }
}
