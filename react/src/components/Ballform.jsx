import { useState } from "react";
import Button from './Button';


const BallForm = ({createBall}) => {
    const [ball, setBall] = useState(
        {
            "kind": ""
        }
    );

    const setKind = ({target}) => {
        const kind = target.value;
        setBall(lastValue => ({ ...lastValue, kind }))
    }


    return <>
        <form>
            <input type="text" name="kind" onChange={setKind} value={ball.kind}></input>
        </form>
        <Button name="enviar" onClick={() => createBall(ball)}></Button>
        <div>
            {JSON.stringify(ball)}
        </div>
    </>;
}

export default BallForm;