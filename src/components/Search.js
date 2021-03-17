import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const Search = () => {

    

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response => {
            console.log("***********")
            console.log(response)
            console.log("***********")
            setStarwarsData(response.data)
            setDropdownKeys(Object.keys(response.data))
            // console.log(Object.keys(object1));



        })
        .catch(err => {
            console.log("ERROR ERRROR DOEEE", err)
          

        })
    }, [])


    const [starwarsData, setStarwarsData] = useState({})
    const [dropdownKeys, setDropdownKeys] = useState([])

    const [formInfo, setFormInfo] = useState({
        term: "people",
        idInput: ""
    })

    const changeHandler = (e)=>{
        console.log("filling out form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        navigate(`/${formInfo.term}/${formInfo.idInput}`)

    }


   

    
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <p>Search for: <select onChange = {changeHandler} name="term" id="">
                    {dropdownKeys.map((item, i)=>{
                        return <option key = {i} value={item}>{item}</option>
                    })}
                    
                    
                    </select></p>

                <p>Id: <input type="number" onChange = {changeHandler} name="idInput" id=""/></p>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
};


export default Search;