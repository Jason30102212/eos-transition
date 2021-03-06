import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import logo from '../../images/transitionLogo2.svg'
=======
import logo from '../../images/logo.png';
>>>>>>> e6b49cd9ce2c866e4856c76f71dcf971a14b3730
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { logoutUser } from '../../actions/authActions';
//import { clearCurrentProfile } from '../../actions/profileActions';
//import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onlogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile()
    this.props.logoutUser();
  }

  render() {
    //const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-link" to="/feed">
          <Link className='nav-link' to='/feed'>
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/'>
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <a
            href="/"
            onClick={this.onlogoutClick.bind(this)}
            className='nav-link'
          >
            <img
              className='rounded-circle'
              //src={user.avatar}
              //alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            /> {' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks =(
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>
            Sign Up
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-0">
        <div className="container">
          <Link className="navbar-brand" to="/">
<<<<<<< HEAD
            <img src={logo} alt="Logo" />
          </Link>
=======
            <img src={logo} alt="logo" width="30px"/>
          </Link>
          <h2>EOS TRANSITION DAO</h2>
>>>>>>> e6b49cd9ce2c866e4856c76f71dcf971a14b3730
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className='navbar-nav ml-auto'>
<<<<<<< HEAD
              <li className="nav-item">
                <input type="text" placeholder="Search.."></input>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'>

                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
=======
>>>>>>> e6b49cd9ce2c866e4856c76f71dcf971a14b3730
            </ul>
            {/*isAuthenticated ? authLinks : guestLinks*/}
          </div>
        </div>
      </nav>
    )
  }
}

//Navbar.propTypes = {
//  logoutUser: PropTypes.func.isRequired,
//  auth: PropTypes.object.isRequired
//};

const mapStateToProps = state => ({
  //auth: state.auth
});

//export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  //Navbar
//);

export default Navbar;
