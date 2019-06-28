import React, { Component } from 'react';

class MainCategories extends Component {

  state = {
    mainCategories: [
        {name:"Web Development"},
        {name:"Mobile Development"},
        {name:"Design"},
        {name:"Writing"},
        {name:"Assistants"},
        {name:"Customer Support"},
        {name:"Sales and Marketing"},
        {name:"Accounting"}
    ]
  }

  renderMainCategoryDivs = () => {
    return this.state.mainCategories.map(category => {
        return(
          <div className="col-md-3 category-card-spacing">
            <div class="card">
              <div class="card-body">{category.name}</div>
            </div>
          </div>
        )
      }
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center-text">
            <h1>Build your team with expert in the following</h1>
          </div>
        </div>
        <div className="row">
          {this.renderMainCategoryDivs()}
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

export default MainCategories;
