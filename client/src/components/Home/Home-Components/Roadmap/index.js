import React, {Component} from 'react';

class Roadmap extends Component {

  state = {
    items: [
      {heading: "Create token contract", content: ""},
      {heading: "Assemble Team", content: ""},
      {heading: "MVP for EOS Work", content: ""},
      {heading: "??? More information to come", content:""},
    ]
  }

  renderItems = () => {
    return this.state.items.map(item => {
      return(
        <div className="col-md-3 category-card-spacing">
          <div class="card">
            <div class="card-body">
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div className="light-grey-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12 center-text">
              <h1>Current Roadmap</h1>
            </div>
          </div>
          <div className="row">
            {this.renderItems()}
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

export default Roadmap;
