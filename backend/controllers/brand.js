
const Brand = require('../models/brand');

const createBrand = async(brand) => {
    return await Brand.create(brand);
}

const deleteBrand = async (brandId) => {     
    const team = await Brand.findByIdAndDelete(brandId);
    return false;

}


const getBrandsbyBall = async(ball) =>{    return await ball.find({ball}).populate("ball")}



const getBrand = async () => {     
    return await Brand.find()}


module.exports = { 
     createBrand,   
     getBrand,
    deleteBrand,
    getBrandsbyBall
    }

