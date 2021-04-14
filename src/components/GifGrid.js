// import React, { useState,useEffect } from 'react'
import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => { 
    // const [images, setImages] = useState([]);



    // useEffect(()=>{
    //         getGifs(category)
    //         .then(setImages);
    // },[category])

    const {data:imagenes,loading}=useFetchGifts(category);
    

    


    return (
        <>
            <h3 className="animate__animated animate__fadeIn ">{category}</h3>
            {loading&&<p className="animate__animated animate__flash ">Loading...</p>}
            <div className="card-grid">
                    {
                        imagenes.map(img=>(
                            <GifGridItem 
                            key={img.id}
                            {...img}
                            
                            />
                        ))
                    }
            </div>
        </>
    )
}
