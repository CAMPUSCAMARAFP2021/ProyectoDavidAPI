import Brand from "./Brand"
import BrandForm from './BrandForm';

import { useState, useEffect } from 'react';
import { getBrand,createBrand, deleteBrand} from "../api/brand";

const BrandList = ({jwt}) => {
    const [Brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateBrands = (brand) => {
        setIsLoading(true);
        createBrand(brand)
            .then((newBrand) => {
                 setBrands((prevState) => [...prevState, newBrand]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteBrand= (brand, jwt) => {
       setIsLoading(true);
       deleteBrand(brand)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getBrand(jwt).then((Brands) => {    
            setBrands(Brands);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            Brands.map(brand => 
                <Brand 
                    key={brand._id} 
                    brand={brand} 
                   onDelete={() => doDeleteBrand(brand)}
                />)}
        <BrandForm createBrand={doCreateBrands}></BrandForm>
    </>
        
}
    

export default BrandList;