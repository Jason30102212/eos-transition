import React, {Component} from 'react';
import Slider from '@material-ui/lab/Slider';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
  slider: {
    padding: '0px 0px',
  },
};


class Voting extends Component {

  state = {
    createCToken: true,
    distributeCTokens: true,
    creationPercentSlider: 50,
    percentageToDistributeSlider: 50,
    toHoldersPercentage: 33,
    sellCToken: true
  }

  handleChange = name => (e, value) => {
    this.setState({
      [name]: value // --> Important bit here: This is how you set the value of sliders
    });
  };

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="light-grey-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12 center-text p-5">
              <h1>Voting Component</h1>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-12 center-text pt-5">
                <h3>Should EOS deposits create new C-Tokens?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text">
                {this.state.createCToken === false?
                  <div>
                    No
                  </div>
                  :
                  <div>
                  </div>
                }
                <Switch
                   checked={this.state.createCToken}
                   onChange={this.handleChange('createCToken')}
                   value="createCToken"
                 />
                 {this.state.createCToken === true ?
                   <div>
                     Yes
                   </div>
                   :
                   <div>
                   </div>
                 }
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text p-5">
                <h3>Percentage of C-Token to be created for each EOS token deposited into treasury:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider
                  value={this.state.creationPercentSlider}
                  aria-labelledby="label"
                  onChange={this.handleChange("creationPercentSlider")}
                  step="1"
                  disabled={!this.state.createCToken}
                />
              </div>
            </div>
            <div className="row row-margin">
              <div className="col-md-12">
                <div class="card p-5 center-text">
                  <h3>{this.state.creationPercentSlider}%</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-5">
            <div className="row">
              <div className="col-md-12 center-text pt-5">
                <h3>Should C-Tokens currently be distributed?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text">
                {this.state.distributeCTokens === false ?
                  <div>
                    No
                  </div>
                  :
                  <div>
                  </div>
                }
                <Switch
                   checked={this.state.distributeCTokens}
                   onChange={this.handleChange('distributeCTokens')}
                   value="distributeCTokens"
                 />
                 {this.state.distributeCTokens === true ?
                   <div>
                     Yes
                   </div>
                   :
                   <div>
                   </div>
                 }
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text p-5">
                <h3>Percentage of C-Token to be distributed from the treasury:</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                value={this.state.percentageToDistributeSlider}
                aria-labelledby="label"
                onChange={this.handleChange("percentageToDistributeSlider")}
                step="1"
                disabled={!this.state.distributeCTokens}
              />
            </div>
          </div>
          <div className="row row-margin">
            <div className="col-md-12">
              <div class="card p-5 center-text">
                <h3>{this.state.percentageToDistributeSlider}%</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 center-text">
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 center-text">
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 center-text">
            </div>
          </div>

          <div className="card mt-5">
            <div className="row">
              <div className="col-md-12 center-text pt-5">
                <h3>Should CTokens held in the Treasure be...</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text">
                <h4>sold for EOS?</h4>
                {this.state.sellCToken === false?
                  <div>
                    No
                  </div>
                  :
                  <div>
                  </div>
                }
                <Switch
                   checked={this.state.sellCToken}
                   onChange={this.handleChange('sellCToken')}
                   value="sellCToken"
                 />
                 {this.state.sellCToken === true ?
                   <div>
                     Yes
                   </div>
                   :
                   <div>
                   </div>
                 }
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-text">
                <h4>Held in contract?</h4>
                {this.state.holdCToken === false?
                  <div>
                    No
                  </div>
                  :
                  <div>
                  </div>
                }
                <Switch
                   checked={this.state.holdCToken}
                   onChange={this.handleChange('holdCToken')}
                   value="holdCToken"
                 />
                 {this.state.sellCToken === true ?
                   <div>
                     Yes
                   </div>
                   :
                   <div>
                   </div>
                 }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>You have voted that:</p>
              { this.state.createCToken === true
                ?
                <div>
                  for every EOS token distributed, {this.state.creationPercentSlider}% of a CToken be created.
                </div>
                :
                <div>
                  no CToken be created.
                </div>

              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>You </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Voting)
