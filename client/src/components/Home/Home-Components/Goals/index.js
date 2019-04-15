import React, { Component } from 'react';

class Goals extends Component {




  render() {
    return(

      <div className="container">
        <div className="row">
          <div className="col-md-12 center-text">
            <h1>Goals of EOS Transition</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">Create decentralized solutions to pre existing web platforms.</div>
            </div>
          </div>
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">Combine the power of blockchain with already established web principles.</div>
            </div>
          </div>
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">Determine best practices for Decentralized Autonomous Organizations.</div>
            </div>
          </div>
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">Simplify the implementation of blockchain and colaboration between technical and non techical stakeholders.</div>
            </div>
          </div>
        </div>
        <div className="row row-margin">
          <div className="col-md-12">
            <div class="card">
              <div class="card-body center-text">See All Categories</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Goals;
