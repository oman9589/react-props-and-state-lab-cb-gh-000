import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = () => {
      this.props.pets.map((pet) => {
        return <Pet name={pet.name} age={pet.age} gender={pet.gender} type={pet.type}/>
      })
    }
    return (
      <div className="ui cards">
        {this.pets}
      </div>
    );
  }
}

export default PetBrowser;
