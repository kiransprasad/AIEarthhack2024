import React, { useState } from 'react';

const SearchForm = ()=>{
    const [searchInput, setSearchInput] = useState(''); // the value in the box
    
    const handleChange = (e)=>{
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const response = await fetch('/',{
            method: 'POST',
            body: JSON.stringify(searchInput),
        })

        const json = await response.json();

        if (response.ok){
            console.log("worked!");
            console.log(json)
        }
    }

    return(

        <form className="search" onSubmit = {handleSubmit}>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
                <button>Find answer</button>
        </form> 
    )
}

export default SearchForm;