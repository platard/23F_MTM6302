/*** Object literals ***/

//Create your HTML file, link your JS file, and install Bootstrap.

//Create an array of objects (data structure) to manage store items. Use two properties (productName, price) in the object. Create two products.

const products = [
    {
        productName: 'Laptop',
        price: 2000,
        updatePrice: function(newPrice){
            this.price = newPrice
        }
    },
    {
        productName: 'Tablet',
        price: 500
    }
]

//Print the first product in the console; retrieve the 'productName' property.
console.log( products[0].productName )

//Add one extra item to the 'products' array using a method
products.push( {
    productName: 'Hoodie',
    price: 100
} )

//Update the price of one of the products
products[0].price = 1000

//Add the property 'size' to any of the products
products[products.length -1].size = "Large"

const descriptions = [
    'First product description',
    'Second product description',
    'Third product description'
]
//Add the property 'description' to all the products(objects); use the 'descriptions' array


// let i = 0
// for( const product of products){
//     product.description = descriptions[i]
//     i++
// }

for ( let i = 0; i < products.length; i++  ){
    products[i].description = descriptions[i]
}

//Delete the property 'size'
delete products[products.length -1].size

//Go back to the object definition and create a method(function), as a property, to update the 'price' of a product. Test it in the console.

//Do the same with a regular function
    //1.declare the function; identify the inputs that you need.
    function updatePrice(newPrice, product){
   
        //2.find() the right product
        const productFound = products.find(obj => obj.productName === product )
        //3.assign the new value
        productFound.price = newPrice
    }

    updatePrice(1, 'Hoodie')


//Display all the products in the 'document'. 

    //1.define varibles; 'DOM element' and a empty array
    const $container = document.getElementById('container')

    const template = []

    //2.define your 'html template'; push 'html code'(template) to the array.
    for(const product of products){
        template.push( `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
            <p class="card-text">${product.description}</p>
        </div>
        </div>
        ` )
    }

    //3.join and insert the complete 'html template'
    $container.innerHTML = template.join('')
 


    
/*** Object methods ***/

// Create a function 'countKeys' that takes an object as an argument and returns the number of keys the object has.

function countKeys(obj){
    const props = Object.keys(obj)
    return props.length 
}


// Create an object that holds the inventory and calculate the total number of products in the inventory.

const inventory = {
    Tablet: 20,
    Laptop: 15,
    Hoodie: 30
}

function total (inventory){

    //Obtain the values
    const items = Object.values(inventory)
    //Reduce the array to a single value
    return items.reduce( (accumulator, value) => accumulator + value )

}



