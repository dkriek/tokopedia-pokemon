import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button,Card,Badge} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Abilities from "./component/screen/Abilities";

function Detailpokemon() {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const [singlePost, setPost] = useState(null); 
    let abilities = [];  
    let content = null;   

    useEffect(() => {
        axios.get(url).then((response) => {
          setPost(response.data);
        });
      }, [url]);
    
      if (singlePost) {
        abilities = singlePost.abilities;
        var pokemon_name = capitalizeFirstLetter(singlePost.name)
       // console.log(abilities);
        return (content = (
            <div>
                <Card>
                <Card.Header>{pokemon_name} Ability</Card.Header>
                <Card.Body>                    
                    { 
                        abilities.length > 0 ? abilities.map((value,index) => (                  
                                 <div key={index}>                                 
                                <Card.Title>{value.ability.name}</Card.Title>
                                <Card.Text>
                                 {  
                                    <Abilities nama={value.ability.name} url={value.ability.url}></Abilities> 
                                 }
                                </Card.Text>
                                <br />
                                </div>                   
                        )) : null
                    } 
                    <Link to={`/`}>
                    <Button variant="primary" size="sm" >Back</Button>
                    </Link>
                </Card.Body>
                </Card>
                
            </div>
            
        ));
      }
      return <div>{content}</div>;    
}
 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Detailpokemon;
