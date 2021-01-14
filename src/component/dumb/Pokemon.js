import React from 'react';

const Pokemon = (props) => {
    return(
        <div>
            <ul>
            {props.data.map((value,index)=>
                <li key={index}>{value.name}</li>
            )}
            </ul>
        </div>
    )
}

export default Pokemon;