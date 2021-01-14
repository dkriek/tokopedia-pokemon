import React from 'react';

class Input extends React.Component{

    constructor(props){
        super(props)
        // console.log(props)
      }

    render(){
        return(
            <div>
                <input name={this.props.name} value={this.props.alamat}></input>
            </div>
        );
    }
}

export default Input;