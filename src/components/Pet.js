import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.name} {this.props.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ?
            <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button> :
            <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;