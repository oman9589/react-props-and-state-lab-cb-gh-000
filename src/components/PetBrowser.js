import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = () => {
      this.props.pets.map((pet) => {
        <Pet />
      })
    }
    return (
      <div className="ui cards">
        {pets}
        <Pet />
      </div>
    );
  }
}

export default PetBrowser;
