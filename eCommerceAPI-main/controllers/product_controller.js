const Product = require('../models/product');

// function to show all the products
module.exports.products = async function (req, res) {
    try {
        const foundProducts = await Product.find({});
        res.send(foundProducts);
    } catch (err) {
        res.send(err);
    }
};


// function to create a new product
module.exports.create = async function (req, res) {
    try {
        let newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        await newProduct.save();
        res.send('New product added successfully.');
    } catch (err) {
        res.send(err);
    }
};


// function to delete a product
module.exports.delete = async function (req, res) {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.send({ message: "Product deleted" });
    } catch (err) {
        res.send(err);
    }
};


// function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
    const ID = req.params.id;
    try {
        const found = await Product.findById(ID);

        if (!found) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const newQty = parseInt(found.quantity) + parseInt(req.query.number);

        const updatedProduct = await Product.findByIdAndUpdate(
            ID,
            { quantity: newQty },
            { new: true }
        );

        updatedProduct.quantity = newQty;

        return res.json({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};
