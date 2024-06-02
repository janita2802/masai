var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

let storeAnalysis = (store) =>{
    let rating = [];
    store.forEach(element => {
        let product_name = element.name;
        let product_rating = element.rating;
        rating.push(product_rating); 
        console.log(product_name, product_rating) ;

        Min_price_product = Math.min(element.price);
        nameofminproduct = element.name;
        return{nameofminproduct, Min_price_product};    
    });

    let sum = rating.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    console.log("average rating:", Math.floor(sum/rating.length) );
    console.log(nameofminproduct, ":", Min_price_product) ;
    console.log("checking integrity:", store);

   
}
storeAnalysis(store);

