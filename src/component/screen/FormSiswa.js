import React from 'react';
import FormHandler from '../../helper/FormHandler'

const FormSiswa = (props) =>{
    return (
        <div>
            <label>Masukkan Nama Siswa</label>
            <input onChange={(e)=>props.changeName(e.target.value)}
                value={props.name}
            ></input>
            <p style={{color:props.color}}>{props.name}</p>
        </div>
    )
}

export default FormHandler(FormSiswa)