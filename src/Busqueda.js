import React, { Component } from 'react';
import Paises from './Paises.json';
class Busqueda extends Component {

  state = {
    busquedas : Paises
  }
  render(){
    return(
      <div>
        <h2>Lista</h2>
          {this.state.busquedas.map(
            (busqueda) => {
            return(
              <li>
                {busqueda.flag}
                {busqueda.name.common}
              </li>
          )}
        )}

      </div>
    )
  }
}

export default Busqueda
