import Ball from "./Ball"
import BallForm from './Ballform';

import { useState, useEffect } from 'react';
import {getBalls, createBalls, deleteBall} from "../api/balls";

const BallList = ({jwt}) => {
    const [balls, setBalls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateBall = (ball) => {
        setIsLoading(true);
        createBalls(ball)
            .then((newBall) => {
                 setBalls((prevState) => [...prevState, newBall]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteBall = (ball, jwt) => {
       setIsLoading(true);
       deleteBall(ball)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getBalls(jwt).then((balls) => {    
            setBalls(balls);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            balls.map(ball => 
                <Ball 
                    key={ball._id} 
                    ball={ball} 
                   onDelete={() => doDeleteBall(ball)}
                />)}
        <BallForm createBall={doCreateBall}></BallForm>
    </>
        
}
    

export default BallList;