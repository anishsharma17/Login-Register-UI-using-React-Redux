import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/action';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <nav >
      <Link to="/home">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/userLists">UserList</Link>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
};


export default Nav;
