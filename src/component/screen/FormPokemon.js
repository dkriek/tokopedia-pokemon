import React, { Fragment } from "react";
import * as Services from '../../services'
import {Button,Card,Badge} from 'react-bootstrap';
import { Link } from "react-router-dom";

class FormPokemon extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id : '',
            abilities : []
           
        }
        // console.log(props)
      }

      componentDidMount(){
        console.log('Melakukan set data pokemon')
        console.log(this.props.url)
         this.getDetailPokemon()         
      }

      componentDidUpdate(){
        console.log('Melakukan update data pokemon')
     }

      getDetailPokemon = async () =>{
        let response = await Services.detailPokemon(this.props.url)
        //console.log(response);
        this.setState({
            id : response.data.id,
            abilities : response.data.abilities
        })
        //console.log(this.state.id)
       //console.log(this.state.abilities)
      }
       

    render(){             
        const img_url = 'https://pokeres.bastionbot.org/images/pokemon/'+this.state.id+'.png'
        return(             
            <Card>
            <Card.Img variant="top" src={img_url} class="img_pokemon"/>
            <Card.Body>
                <Card.Title>#{this.state.id} {this.props.nama}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Abilities</Card.Subtitle>
                <Card.Text>
                {this.state.abilities.map((value,index)=>  
                <Badge variant="light" key={index}>{value.ability.name}</Badge>
                )}
                </Card.Text>
                <Link to={`/detailpokemon/${this.state.id}`}>
                  <Button variant="primary" size="sm" >Detail</Button>
                </Link>
                
            </Card.Body>
            <Card.Footer>
                 <small className="text-muted">Not Owned</small>
            </Card.Footer>
            </Card>                      
        );
    }
}

export default FormPokemon;