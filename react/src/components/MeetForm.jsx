import { useState } from "react";
import Button from './Button';


const MeetForm = ({createMeet}) => {
    const [meet, setMeet] = useState(
        {
            "date": ""
        }
    );

    const setDate= ({target}) => {
        const date = target.value;
        setMeet(lastValue => ({ ...lastValue, date }))
    }


    return <>
        <form>
            <input type="text" name="date" onChange={setDate} value={meet.date}></input>
        </form>
        <Button name="enviar" onClick={() => createMeet(meet)}></Button>
        <div>
            {JSON.stringify(meet)}
        </div>
    </>;
}

export default MeetForm;