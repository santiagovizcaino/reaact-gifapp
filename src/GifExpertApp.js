import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp=()=>{
    // const categorias=['Bob Esponja','Jhony Bravo','Dexter']
    const [categoria, setCategoria] = useState(['Bob Esponja'])
    
    // const anadirCategoria=()=>{
    //     // setCategoria([...categoria,'Garfield']);
    //     setCategoria(category=>[...category,'Garfield'])

    // }




    return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategoria={setCategoria}/>
        <hr/>

        


        <ol>
            {
                categoria.map((category)=>(
                    <GifGrid key={category} category={category} />
                
                ))
            }

        </ol>
    </>
    )

}