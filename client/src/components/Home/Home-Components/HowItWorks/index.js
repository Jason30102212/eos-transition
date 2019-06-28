import React, {Component} from 'react';

class HowItWorks extends Component {

  state = {
    processes: [
      {step: "Post Job", description: "Describe your project, and connect with skilled professionals from around the world"},
      {step: "Vet Offers", description: "View offers and determine the right fit for the position"},
      {step: "Communicate", description: "Chat, share files and track project milestones"},
      {step: "Pay", description: "Pay for work completed with a variety of Crypto Currencies"}
    ]
  }

  renderSteps = () => {
    return this.state.processes.map(process => {
        return(
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">
                <h3>{process.step}</h3>
                <p>{process.description}</p>
              </div>
            </div>
          </div>
        )
    })
  }

  render() {
    return(
      <div className="light-grey-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12 center-text">
              <h1>Build your team with expert in the following</h1>
            </div>
          </div>
          <div className="row">
            {this.renderSteps()}
          </div>
          <div className="row row-margin">
            <div className="col-md-12">
              <div class="card">
                <div class="card-body center-text">View Video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorks;
