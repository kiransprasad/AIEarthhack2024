import React from 'react';
import { useLocation } from "react-router-dom";
import './index.css';


function ViewIdea() {

    const { state } = useLocation();

    return (
        <>
            <h1 className="IdeaViewHeader">Idea ID: #{state.id}</h1>

            <div className="response">
                <div>
                    <h2>Problem:</h2>
                    <p>{state.problem}</p>
                </div>
                <div>
                    <h2>Solution:</h2>
                    <p>{state.solution}</p>
                </div>
            </div>

            <h2 className="IdeaViewHeader">Scores</h2>

            <div class="Statline">
                <div className='Statline-block'>
                    <h4>Feasibility</h4>
                    <svg viewBox="0 0 36 36" class="circle-svg">
                    <path class="around" 
                        stroke-dasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="percent" stroke-dasharray={Math.floor((state.feasibility) * 100).toString() + ", 100"} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <text x="18" y="14" text-anchor="middle" dy="7" font-size="20" fontFamily='Gill Sans'>{(Math.floor((state.feasibility) * 1000) / 10).toFixed(1)}%</text>
                    </svg>
                </div>
                <div className='Statline-block'>
                    <h4>Innovation</h4>
                    <svg viewBox="0 0 36 36" class="circle-svg">
                    <path class="around" 
                        stroke-dasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="percent" stroke-dasharray={Math.floor((state.innovation) * 100).toString() + ", 100"} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <text x="18" y="14" text-anchor="middle" dy="7" font-size="20" fontFamily='Gill Sans'>{(Math.floor((state.innovation) * 1000) / 10).toFixed(1)}%</text>
                    </svg>
                </div>
                <div className='Statline-block'>
                    <h4>Scalability</h4>
                    <svg viewBox="0 0 36 36" class="circle-svg">
                    <path class="around" 
                        stroke-dasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="percent" stroke-dasharray={Math.floor((state.scalability) * 100).toString() + ", 100"} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <text x="18" y="14" text-anchor="middle" dy="7" font-size="20" fontFamily='Gill Sans'>{(Math.floor((state.scalability) * 1000) / 10).toFixed(1)}%</text>
                    </svg>
                </div>
                <div className='Statline-block'>
                    <h4>Circ. Econ</h4>
                    <svg viewBox="0 0 36 36" class="circle-svg">
                    <path class="around" 
                        stroke-dasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="percent" stroke-dasharray={Math.floor((state.circular_economy + 0.1) * 100).toString() + ", 100"} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <text x="18" y="14" text-anchor="middle" dy="7" font-size="20" fontFamily='Gill Sans'>{(Math.floor((state.circular_economy + 0.1) * 1000) / 10).toFixed(1)}%</text>
                    </svg>
                </div>
            </div>

        </>
    );
}

export default ViewIdea;