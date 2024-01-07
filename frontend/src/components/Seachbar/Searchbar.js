import React, { useState } from 'react';

const SearchForm = ()=>{
    const [searchInput, setSearchInput] = useState(''); // the value in the box
    const [responseData, setResponseData] = useState(null); // the response data
    const [error, setError] = useState(null); //whether there is an error
    
    const handleChange = (e)=>{
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();

        setResponseData('loading');
        const response = await fetch('/',{
            method: 'POST',
            body: JSON.stringify(searchInput),
        })

        const json = await response.json();

        if (response.ok){
            console.log("worked!");
            console.log(json);

            setResponseData(json);
            setSearchInput('');
            setError(null);
        }
        else{
            setError(json.error);
            setResponseData(null);
        }
    }

    return(
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            
            <form className="search" onSubmit = {handleSubmit}>
                <h1>Ask a question:</h1>
                    <textarea
                        rows="30" cols="50"
                        type="text"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput} />
                    <button>Find answer</button>
            </form> 

            {/* Get the response if we have one and we aren't loading */}
            {(responseData && responseData!=='loading') &&(
                <div className="response">
                    <h2>Problem:</h2>
                    <p>{responseData.problem}</p>

                    <h2>Answer:</h2>
                    <p>{responseData.answer}</p>
                </div>
            )}

            {/* If we're loading */}
            {(responseData && responseData==='loading') &&(
                <div className="loading">
                    <img src="200w.gif" alt="loading"/>
                </div>
            )}

            {/* If we got an error */}
            {error && <div className="error">{error}</div>}
            
        </div>
    )
}

export default SearchForm;