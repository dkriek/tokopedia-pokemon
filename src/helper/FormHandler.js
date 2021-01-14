import React from 'react'

const FormHandler = OriginalComponent => {
    class NewComponent extends React.Component{
        constructor (props){
            super(props)
            this.state = {
                name : '',
                color :'',
            }
        }

        changeName = (value) =>{
            this.setState({
                name : value,
                color : this.generateColor()
            })
        }

        generateColor = () => {
            let items = ["blue","green","red"]
            let randomColor = items[Math.floor(Math.random() * items.length)]
            return randomColor
        }

        render(){
            return (
                <OriginalComponent
                    name = {this.state.name}
                    changeName = {this.changeName}
                    color = {this.state.color}
                />
            )
        }
    }
    return NewComponent 
}

export default FormHandler