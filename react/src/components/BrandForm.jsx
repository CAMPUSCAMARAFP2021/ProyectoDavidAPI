import { useState } from "react";
import Button from './Button';


const BrandForm = ({createBrand}) => {
    const [brand, setBrand] = useState(
        {
            "name": ""
        }
    );

    const setBrands = ({target}) => {
        const name = target.value;
        setBrand(lastValue => ({ ...lastValue,  name }))
    }


    return <>
        <form>
            <input type="text" name="name" onChange={setBrands} value={brand.name}></input>
        </form>
        <Button name="enviar" onClick={() => createBrand(brand)}></Button>
        <div>
            {JSON.stringify(brand)}
        </div>
    </>;
}

export default BrandForm;