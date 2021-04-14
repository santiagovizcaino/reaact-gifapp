import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts=(category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true,
    });


    useEffect(()=>{
        getGifs(category)
        .then(img=>{
            setTimeout(() => {
                setState({
                    data:img,
                    loading:false,
                });
            }, 100);


            


        })

    },[category])

  



    return state





}