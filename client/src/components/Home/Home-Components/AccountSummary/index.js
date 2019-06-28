import React, {Component} from 'react';

class AccountSummary extends Component {

  state = {
    accountName: "eos11111111",
    loggedIn: true,
    cTokensHeld: 10,
    totalEosDeposited: 100

  }

  render() {
    return(
          <div>
          {
            this.state.loggedIn
            ?
            <div className="container">
              <div className="row p-5">
                <div className="col-md-12 center-text">
                  <h3>Account: {this.state.accountName}</h3>
                </div>
              </div>
              <div className="row p-5">
                <div className="col-md-4 center-text">
                  <div className="card p-2">
                    <h3>CTokens held</h3>
                    <h3>{this.state.cTokensHeld} CTokens</h3>
                  </div>
                </div>
                <div className="col-md-4 center-text">
                  <div className="card p-2">
                    <h3>Total EOS Deposited</h3>
                    <h3>{this.state.totalEosDeposited} EOS</h3>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  not loggedIn
                </div>
              </div>
            </div>
          }
        </div>
    )
  }
}

export default AccountSummary;
