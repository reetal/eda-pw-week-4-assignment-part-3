console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// let basket = [];
// function addItem(item) {
//     if (item.length > 0) {
//        console.log("true")
//     }
//     basket.push(item);
// }
// // addItem('apple');
// console.log(addItem("apple"))
// console.log(basket);

let basket = [];
function addItem(item){
    basket.push(item);
    return true;
  
   
    }
   
    addItem("tomato");
    addItem("pasta");
    console.log(`basket is ${basket}`);
    function listItems(){
        for(let i = 0; i < basket.length; i++);
        
       
    }
    console.log(`Was ${basket} added?`, addItem());
    console.log(`Basket is now ${basket}`);
    
    function empty(){
        while(basket.length > 0) {
            basket.pop();
        }
    }

  







