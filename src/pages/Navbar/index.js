import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { createStructuredSelector } from 'reselect';

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
import { makeSelectUserData } from './selectors';
import { login } from '../../services/actions/auth';

function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const [openAccountDialog, setOpenAccountDialog] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: {
      value: '',
      wasUnfocused: false
    },
    password: {
      value: '',
      wasUnfocused: false
    },
    rememberMe: false
  });

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleAccountClick() {
    setOpenAccountDialog(!openAccountDialog);
  }

  function handleLoginFormChange(field, value) {
    if (field === 'rememberMe') {
      setLoginForm({
        ...loginForm,
        rememberMe: !loginForm.rememberMe
      });
    } else {
      setLoginForm({
        ...loginForm,
        [field]: {
          ...loginForm[field],
          value
        }
      });
    }
  }

  function handleInputBlur(field) {
    setLoginForm({
      ...loginForm,
      [field]: {
        ...loginForm[field],
        wasUnfocused: true
      }
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
        onInputBlur={handleInputBlur}
        email={loginForm.email}
        password={loginForm.password}
        rememberMe={loginForm.rememberMe}
        open={openAccountDialog}
      />
    </MuiThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData()
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
