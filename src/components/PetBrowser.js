import React from 'react';
import { includes } from 'Array.prototype'
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = () => {
      this.props.pets.map(() => {
        return (
          <Pet onAdoptPet={this.props.onAdoptPet} isAdopted={}/>
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
