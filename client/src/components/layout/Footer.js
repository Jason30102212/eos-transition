import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center footer-height">
        <div className="row">

        </div>
        <div className="row">
          <div className="col-md-12 p-5">
            Copyright &copy; {new Date().getFullYear()} EOS Work
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
