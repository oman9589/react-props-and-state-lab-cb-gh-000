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
        this.setState({
          ...this.state,
          pets: this.props.fetchAll
        })
        window.alert(this.props.pets);
        break;
      case 'cat':
        this.setState({
          ...this.state,
          pets: fetch('/api/pets?type=cat')
        })
        break;
      case 'dog':
        this.setState({
          ...this.state,
          pets: fetch('/api/pets?type=dog')
        })
        break;
      case 'micropig':
        this.setState({
          ...this.state,
          pets: fetch('/api/pets?type=micropig')
        })
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
