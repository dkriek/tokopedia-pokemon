import React, {Component} from 'react';
import * as Services from './services'
import axios from "axios";
import FormPokemon from "./component/screen/FormPokemon";
import {Container, Navbar, Row, Col, CardDeck} from 'react-bootstrap';
 
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          items: []   
        };   
      }

      componentDidMount(){
        console.log('Melakukan set data')
        //this.getPokemon()
        fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
           .then(res => res.json())
           .then(parsedJSON => parsedJSON.results.map(data => (
             {
               name: data.name,
               url: data.url,             
             }
           )))
           .then(items => this.setState({
             items,
             isLoaded: false
           }))
           .catch(error => console.log('parsing failed', error))
     }
   
     componentDidUpdate(){
       console.log('Melakukan update data')
    }
   
    createRequest = async () => {
      let response =  await Services.listPokemon()
      this.setState({
       items : response.data.results
      })
    }
       
     
     render(){
       const { items } = this.state;
       return (
          
          <CardDeck>    
           {
             items.length > 0 ? items.map(item => {
             const {name,url} = item;                         
              return (  
               <div key={name}>          
               <FormPokemon nama={name} url={url}></FormPokemon>  
              </div>    
             );
           }) : null
         }
          </CardDeck> 
          
       );
     }
}

export default Home;