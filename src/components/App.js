import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handleChangeType = (newType) => {
    this.setState({
      ...this.state,
      filters: {
        type: newType,
      }
    })
  }

  handleFindPetsClick = () => {
    switch(this.state.filters.type) {
      case 'all':
        break;
      case 'cat':
        break;
      case 'dog':
        break;
      case 'micropig':
        break;
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type}
                       onChangeType={this.handleChangeType}
                       onFindPetsClick{this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
