const Product = require('../models/product');

module.exports.home = async function (req, res) {
    try {
        let products = await Product.find({})
        return res.render('home', {
            title: " | Home",
            products: products
        });
    } catch (error) {
        console.log("Error in rendering home", error);
    };
};