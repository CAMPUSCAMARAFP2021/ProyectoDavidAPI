import Meet from "./Meet"
import MeetForm from './MeetForm';

import { useState, useEffect } from 'react';
import { getMeet,createMeet, deleteMeet} from "../api/meet";

const MeetList = ({jwt}) => {
    const [Meets, setMeets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateMeet = (meet) => {
        setIsLoading(true);
        createMeet(meet)
            .then((newMeet) => {
                 setMeets((prevState) => [...prevState, newMeet]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteMeet= (meet, jwt) => {
       setIsLoading(true);
       deleteMeet(meet)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getMeet(jwt).then((meets) => {    
            setMeets(meets);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            Meets.map(meet => 
                <Meet 
                    key={meet._id} 
                    meet={meet} 
                   onDelete={() => doDeleteMeet(meet)}
                />)}
        <MeetForm createMeet={doCreateMeet}></MeetForm>
    </>
        
}
    

export default MeetList;