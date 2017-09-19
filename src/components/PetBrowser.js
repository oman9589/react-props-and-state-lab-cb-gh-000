import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = () => {
      this.props.pets.map((pet) => {
        return (
          <Pet onAdoptPet={this.props.onAdoptPet}
               isAdopted={this.props.adoptedPets.contains(this.pet.name)}/>
        );
      })
    }
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
