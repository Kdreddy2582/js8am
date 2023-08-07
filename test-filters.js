let products = [
  {
    "id": 1,
    "price": 250,
    "name": "T-shirt Noramal",
    "category": "men"
  },
  {
    "id": 2,
    "price": 350,
    "name": "T-shirt round neck",
    "category": "men"
  },
  {
    "id": 3,
    "price": 280,
    "name": "T-shirt with coller",
    "category": "men"
  },
  {
    "id": 4,
    "price": 450,
    "name": "shirt with checks",
    "category": "men"
  },
  {
    "id": 5,
    "price": 390,
    "name": "T-shirt Noramal",
    "category": "women"
  },
  {
    "id": 6,
    "price": 370,
    "name": "T-shirt round neck",
    "category": "women"
  },
  {
    "id": 7,
    "price": 260,
    "name": "T-shirt with coller",
    "category": "women"
  },
]

// let newProducts = [];
// for(product of products){
//   if(product.category == "women"){
//     newProducts.push(product)
//   }
// }

// newProducts = products.filter(
//   (product =>{
//     //return product.category == 'women'
//     return product.price>=250 && product.price<=350; 
//   })
// )


// console.log("All Products")
// console.log(products)
// console.log("Filtered Products")
// console.log(newProducts)


// Sort method 
// Ascending order
products.sort(
  (p1,p2) => {
    if (p1.price > p2.price) return 1 
    else return -1
  }
)

//console.log(products)
console.table(products)
// Deecending order

products.sort(
  (p1,p2) => {
    if (p1.price > p2.price) return -1 
    else return 1
  }
)
//console.log(products)
console.table(products)
