import React from 'react';
import FormHandler from '../../helper/FormHandler'

const FormGuru = (props) =>{
    return (
        <div>
            <label>Masukkan Nama Guru</label>
            <input onChange={(e)=>props.changeName(e.target.value)}
                value={props.name}
            ></input>
            <p style={{color:props.color}}>{props.name}</p>
        </div>
    )
}

export default FormHandler(FormGuru)