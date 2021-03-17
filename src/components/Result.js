import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Result = (props) => {
    const [info, setInfo] = useState({})
    const [valid, setValid] = useState(true)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.categoryTerm}/${props.id}/`)
            .then(response =>{
                console.log("response is here!!!!")
                console.log(response)
                setValid(true)
                setInfo(response.data)

            })
            .catch(err=> {
                console.log(err)
                setValid(false)

            })
    }, [props.categoryTerm, props.id])

    return (
        
        <div>

            {!valid? <p>These are not the droids you're looking for</p>: 
            <>
            <h1>Here are the results from your search relating to {props.categoryTerm} and {props.id}</h1>
            {
            props.categoryTerm=="people"? 
            <>
                <p>Name: {info.name}</p>
                <p>Hair Color: {info.hair_color}</p>
            </>:null
            }
             {
            props.categoryTerm=="planets"? 
            <>
                <p>Name: {info.name}</p>
                <p>Climate: {info.climate}</p>
            </>:null
            }

{
            props.categoryTerm=="films"? 
            <>
                <p>Title: {info.title}</p>
                <p>Director: {info.director}</p>
            </>:null
            }
            </>
        }

            
        </div>
    );
};


export default Result;