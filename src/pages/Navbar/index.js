import React, { useState } from 'react';
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
import { LoginDialog } from '../../components';

function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const [openAccountDialog, setOpenAccountDialog] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleAccountClick() {
    setOpenAccountDialog(!openAccountDialog);
  }

  function handleLoginFormChange(field, value) {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  }

  function handleLoginConfirm() {
    console.log(loginForm);
  }
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
                onChange={handleSearchChange}
                placeholder="Search..."
                value={searchInput}
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
            <IconButton color="inherit" onClick={handleAccountClick}>
              <AccountCircle />
            </IconButton>
          </CategoryWrapper>
        </Categories>
      </NavbarContainer>
      <LoginDialog
        onCancel={handleAccountClick}
        onConfirm={handleLoginConfirm}
        onChange={handleLoginFormChange}
        email={loginForm.email}
        password={loginForm.password}
        rememberMe={loginForm.rememberMe}
        open={openAccountDialog}
      />
    </MuiThemeProvider>
  );
}

export default Navbar;
