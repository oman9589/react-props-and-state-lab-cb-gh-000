import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    const pets = this.props.pets.map(pet => {
      window.alert(pet)
      return (
        <Pet name={pet.name}
           gender={pet.gender}
           age={pet.age}
           type={pet.type}
           onAdoptPet={this.props.onAdoptPet}
           isAdopted={this.props.adoptedPets.contains(pet.name)}/>
      )
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}

export default PetBrowser;
