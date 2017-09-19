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

  handleChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: this.type,
      })
    })
  }

  handleFindPetsClick = () => {
    switch(this.state.filters.type) {
      case 'cat':
        fetch('/api/pets')
          .then(res => res.json())
          .then(pets => this.setState({ pets }))
        break;
      case 'all':
        fetch('/api/pets/cat')
          .then(res => res.json())
          .then(pets => this.setState({ pets }))
        break;
      case 'dog':
        fetch('/api/pets/dog')
          .then(res => res.json())
          .then(pets => this.setState({ pets }))
        break;
      case 'micropig':
        fetch('/api/pets/micropig')
          .then(res => res.json())
          .then(pets => this.setState({ pets }))
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeType}
                       onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.handleAdoptPet}
                          adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
