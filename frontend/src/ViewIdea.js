import React from 'react';
import { useLocation } from "react-router-dom";
import './viewIdea.css';


function ViewIdea() {

    const { state } = useLocation();

    return (
        <>
            <h1>Idea #{state.id}: </h1>

            <div class="nav">
                <div>
                    <h3>Problem:</h3>
                    <p>{state.problem}</p>
                </div>
                <div>
                    <h3>Solution:</h3>
                    <p>{state.solution}</p>
                </div>
            </div>

            <h2>Scores</h2>

        </>
    );
}

export default ViewIdea;