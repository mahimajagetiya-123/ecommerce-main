# eCommerceAPI

Hello evryone,
this is my 3rd skilltest project which is eCommerce API
You can add, delete or update producds data on your eCommerce website using API here
To use it just clone or download and run npm install to start
start command is npm start **(you must have nodemon to use this command) or just use node index.js
This project is running live on https://ecommerce-api-wyg9.onrender.com/

Use Postman API to add or delete or update products
To see the list of products hit get request on https://ecommerce-api-wyg9.onrender.com/products/
To add or create a product hit post request on https://ecommerce-api-wyg9.onrender.com/products/create with form data key 'name' and
'quantity' and value as your product and quantity you want
To delete an unwanted product send delete request on https://ecommerce-api-wyg9.onrender.com/products/:id **(:id is the actual id of product)**
You can update quantity of the products by sending post req on https://ecommerce-api-wyg9.onrender.com/products/:id/update_quantity/?number=x
'x' is the actual value

You can also use this app on your localhost
Thank you Hope you like it...
