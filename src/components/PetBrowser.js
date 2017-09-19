import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
            <Pet name={pet.name}
               gender={pet.gender}
               age={pet.age}
               type={pet.type}
               onAdoptPet={this.props.onAdoptPet}
               isAdopted={this.props.adoptedPets.contains(pet.name)}/>
        })}
    </div>
  }
}

export default PetBrowser;
