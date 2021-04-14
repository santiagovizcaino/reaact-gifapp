import React, { useState } from 'react';
import PropTypes from 'prop-types' ;

export const AddCategory = ({setCategoria})=> {
    const [valorEntrada, setValorEntrada] = useState('')
    const handleInputChange=(e)=>{
        setValorEntrada(e.target.value)
    }

    const handleSubmit=(e) =>{
        e.preventDefault()
        if(valorEntrada.trim().length>2){
            setCategoria(category=>[valorEntrada,...category])
            setValorEntrada('')

        }
        // console.log('hecho el submit');
       

    }   
    
    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={valorEntrada}
                onChange={handleInputChange}
            />

        </form>

        
    )
}

AddCategory.propTypes={
    setCategoria: PropTypes.func.isRequired,

}

// AddCategory.defaultProps={
//     setCategoria:'ingrese algo',
// }