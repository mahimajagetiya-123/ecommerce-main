//importing express library
const express = require('express');
const router = express.Router();
console.log('Product route is loaded');


// importing products controller
const productsController = require('../controllers/product_controller');

// to get all the products
router.get('/', productsController.products);

// to create a product
router.post('/create', productsController.create);

// to delete a product
router.delete('/:id', productsController.delete);

// to update the quantity of a product
router.post('/:id/update_quantity/', productsController.updateQuantity);


//exporting router
module.exports = router;