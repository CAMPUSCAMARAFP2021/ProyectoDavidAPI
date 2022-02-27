var express = require('express');

var router = express.Router();

var brandController = require('../controllers/brand')

router.post('/',async(req, res) => {

    const {brand} = req.body;
    const result =  await brandController.createBrand(brand);
    res.json(result);

});

router.delete('/:brandId', async(req,res) => {

    const {brandId} = req.params;
    const result = await brandController.deleteBrand(brandId);
    res.json(result);

});

router.get('/', async function(req, res) {

    const brands = req.ball ? await brandController.getBrandsbyBall(req.ball) : await brandController.getBrand();

    res.json(brands);

});

module.exports = router;

