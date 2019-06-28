import React, {Component} from 'react';
import { connect } from 'react-redux';
import Goals from './Home-Components/Goals';
import Roadmap from './Home-Components/Roadmap';
import AccountSummary from './Home-Components/AccountSummary';
import Voting from './Home-Components/Voting';
import CoinContract from './Home-Components/CoinContract';
import Contribute from './Home-Components/Contribute';

import './home.css';

import { setContent } from '../../actions/navActions';

import {

} from '../../actions/types';


class Home extends Component {

  setContentDisplay = (content) => {
    console.log("Hit");
    this.props.setContent(content);
  }


  getContent = () => {
    return(
      <div>
        <div class="jumbotron jumbotron-fluid no-bottom-margin">
          <div class="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Creating a Decentralized Autonomous Organization</h1>
                <h1>to promote the continued adoption of EOSIO software</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row spacer-div">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-3 center-text">
                <h3 className="text-colour-white p-4" onClick={(e) => this.setContentDisplay('home')}>HOME</h3>
              </div>
              <div className="col-md-3 center-text">
                <h3 className="text-colour-white p-4" onClick={(e) => this.setContentDisplay('contribute')}>CONTRIBUTE</h3>
              </div>
              <div className="col-md-3 center-text">
                <h3 className="text-colour-white p-4" onClick={(e) => this.setContentDisplay('manage')}>MANAGE ACCOUNT</h3>
              </div>
              <div className="col-md-3 center-text">
                <h3 className="text-colour-white p-4" onClick={(e) => this.setContentDisplay('contract')}>CONTRACT</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 center-text">
                <h3 className="text-colour-white p-4" onClick={(e) => this.setContentDisplay('---')}></h3>
              </div>
            </div>
          </div>
        </div>
        {
          this.props.currentContent === "home" ?
          <div>
            <Goals />
            <Roadmap />
          </div>
          :
          <div>
          </div>
        }

        {
          this.props.currentContent === "contribute"
          ?
          <div>
            <Contribute />
          </div>
          :
          <div>
          </div>
        }

        {
          this.props.currentContent === "manage"
          ?
          <div>
            <AccountSummary />
            <Voting />
          </div>
          :
          <div>
          </div>
        }

        {
          this.props.currentContent === "contract"
          ?
          <div>
            <CoinContract />
          </div>
          :
          <div>
          </div>
        }
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.getContent()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentContent: state.navReducer.currentContent
})

const mapDispatchToProps = {
    setContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
