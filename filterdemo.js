// document.addEventListener('DOMContentLoaded', ()=> {


//     displayFooditem();

// })

//     const foodItems = [
//         {
//           id: 1,
//           name: "Veg Burger",
//           price: 5.99,
//           type: "veg",
//           image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Delicious vegetarian burger with fresh vegetables and special sauce."
//         },
//         {
//           id: 2,
//           name: "Chicken Tikka",
//           price: 8.99,
//           type: "non-veg",
//           image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Juicy chicken pieces marinated in spices and grilled to perfection."
//         },
//         {
//           id: 3,
//           name: "Paneer Tikka",
//           price: 7.49,
//           type: "veg",
//           image: "https://images.unsplash.com/photo-1551881192-002e02ad3d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           description: "Cottage cheese cubes marinated in spices and grilled with vegetables."
//         },
//         {
//           id: 4,
//           name: "Fish and Chips",
//           price: 9.99,
//           type: "non-veg",
//           image: "https://images.unsplash.com/photo-1576777647209-e8733d7b851d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Crispy fried fish fillets served with golden french fries."
//         },
//         {
//           id: 5,
//           name: "Margherita Pizza",
//           price: 11.99,
//           type: "veg",
//           image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil."
//         },
//         {
//           id: 6,
//           name: "BBQ Chicken Pizza",
//           price: 13.99,
//           type: "non-veg",
//           image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Pizza topped with BBQ sauce, chicken pieces, and cheese."
//         },
//         {
//           id: 7,
//           name: "Garden Salad",
//           price: 6.49,
//           type: "veg",
//           image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Fresh salad with mixed greens, tomatoes, cucumbers, and vinaigrette dressing."
//         },
//         {
//           id: 8,
//           name: "Chicken Caesar Salad",
//           price: 8.49,
//           type: "non-veg",
//           image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
//           description: "Classic Caesar salad topped with grilled chicken strips."
//         }
//       ];    


//       const foodContainer = document.getElementById('food-container');
//       const filterButton = document.querySelectorAll('.filter-btn');
//       const noItem = document.getElementById('noItemsMessage');

//       function displayFooditem(filter = 'all'){

//             foodContainer.innerHTML = '';

//             const filteredItems = filter === 'all'
//             ? foodItems
//             : foodItems.filter(item=> item.type === filter);
      

//       if (filteredItems.length === 0) {
//         noItem.style.display = 'block';
//       } else {
//         noItem.style.display = 'none';
//       }


//        // Create and append food item cards

//        filteredItems.forEach(item=>{

//         const foodCard = document.createElement('div');
//         foodCard.className = 'max-w-sm rounded overflow-hidden shadow-lg';

//         const typeIndicatorClass = item.type === 'veg' ? 'veg-indicator' : 'non-veg-indicator' ;


//         foodCard.innerHTML = `
        
//         <div class="food-card">
//             <div class="food-type-indicator ${typeIndicatorClass}"></div>
//             <div class="food-image">
//               <img src="${item.image}" alt="${item.name}">
//             </div>
//             <div class="food-info">
//               <h5 class="food-name">${item.name}</h5>
//               <p class="food-description">${item.description}</p>
//               <div class="flex justify-between items-center	mt-2">
//                 <span class="food-price">$${item.price.toFixed(2)}</span>
//                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//                   <ion-icon name="cart-sharp"></ion-icon> Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//         `
//         foodContainer.appendChild(foodCard);

//        })
//     }

//     filterButton.forEach(button => {
  
//         button.addEventListener('click', function() {

//             filterButton.forEach(btn => btn.classList.remove('active'));

//             this.classList.add('active');

//             const filter = this.getAttribute('data-filter');
//             displayFooditem(filter);

//         })
//     })



document.addEventListener('DOMContentLoaded', () => displayFooditem());


const foodItems = [
    { id: 1, name: "Veg Burger", price: 5.99, type: "veg", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Delicious vegetarian burger with fresh vegetables and special sauce." },
    { id: 2, name: "Chicken Tikka", price: 8.99, type: "non-veg", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Juicy chicken pieces marinated in spices and grilled to perfection." },
    { id: 3, name: "Paneer Tikka", price: 7.49, type: "veg", image: "https://images.unsplash.com/photo-1551881192-002e02ad3d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Cottage cheese cubes marinated in spices and grilled with vegetables." },
    { id: 4, name: "Fish and Chips", price: 9.99, type: "non-veg", image: "https://images.unsplash.com/photo-1576777647209-e8733d7b851d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Crispy fried fish fillets served with golden french fries." },
    { id: 5, name: "Margherita Pizza", price: 11.99, type: "veg", image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil." },
    { id: 6, name: "BBQ Chicken Pizza", price: 13.99, type: "non-veg", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Pizza topped with BBQ sauce, chicken pieces, and cheese." },
    { id: 7, name: "Garden Salad", price: 6.49, type: "veg", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Fresh salad with mixed greens, tomatoes, cucumbers, and vinaigrette dressing." },
    { id: 8, name: "Chicken Caesar Salad", price: 8.49, type: "non-veg", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Classic Caesar salad topped with grilled chicken strips." }
];

const foodContainer = document.getElementById('food-container');
const noItem = document.getElementById('noItemsMessage');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayFooditem(filter = 'all') {
    const filteredItems = filter === 'all' ? foodItems : foodItems.filter(item => item.type === filter);
    noItem.style.display = filteredItems.length ? 'none' : 'block';
    foodContainer.innerHTML = filteredItems.map(item => `
        <div class="max-w-sm rounded overflow-hidden shadow-lg food-card">
            <div class="food-type-indicator ${item.type === 'veg' ? 'veg-indicator' : 'non-veg-indicator'}"></div>
            <div class="food-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="food-info">
                <h5 class="food-name">${item.name}</h5>
                <p class="food-description">${item.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <span class="food-price">$${item.price.toFixed(2)}</span>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <ion-icon name="cart-sharp"></ion-icon> Add to Cart
                    </button>
                </div>
            </div>
        </div>`).join('');
}

filterButtons.forEach(button => button.addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    displayFooditem(this.getAttribute('data-filter'));
}));


