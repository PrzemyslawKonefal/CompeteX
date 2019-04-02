import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';
import { DefaultTheme } from '../../styles/global-styles';
import Logo from './Logo';
import NavbarContainer from './NavbarContainer';
import CategoryWrapper from './CategoryWrapper';
import Categories from './Categories';
import Search from '../../components/Search';
import Badge from '../../components/Badge';
import SearchBox from './SearchBox';
import SearchIcon from './SearchIcon';
import { filterUsers, getUsers } from '../../services/actions/users';
import { LoginDialog } from '../../components';

class Navbar extends React.Component {
  state = {
    searchInput: '',
    openAccountDialog: false,
    loginForm: {
      email: '',
      password: '',
      rememberMe: false,
    },
  };

  handleSearchChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleAccountClick = () => {
    this.setState({ openAccountDialog: !this.state.openAccountDialog });
  }

  handleLoginFormChange = (field, value) => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [field]: value,
      },
    });
  }

  render() {
    const { searchInput, openAccountDialog, loginForm } = this.state;
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
              <IconButton color="inherit" onClick={this.handleAccountClick}>
                <AccountCircle />
              </IconButton>
            </CategoryWrapper>
          </Categories>
        </NavbarContainer>
        <LoginDialog
          onCancel={this.handleAccountClick}
          onConfirm={this.handleLoginConfirm}
          onChange={this.handleLoginFormChange}
          email={loginForm.email}
          password={loginForm.password}
          rememberMe={loginForm.rememberMe}
          open={openAccountDialog}
        />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.get('users'),
});

const mapDispatchToProps = {
  getUsers,
  filterUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
