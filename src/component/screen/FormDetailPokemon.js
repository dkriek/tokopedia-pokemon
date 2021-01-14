import React from 'react'

class FormDetailPokemon extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            characteristics : []
        }
        // console.log(props)
      }

      render(){   
        return(
            <h3>Detail Pokemon {this.props.nama}</h3>
        );
      }
    }

export default FormDetailPokemon;