const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// Function to log names of items
const logNames = (items) => {
  items.forEach(item => console.log(item.name));
};


logNames(groceryList);



// Function to get item names in upercase
const getUpperCaseNames = (items) => {
  return items.map(item => item.name.toUpperCase());
};



console.log(getUpperCaseNames(groceryList));



// Function to get item by ID
const getItemById = (items, id) => {
  return items.find(item => item.find === id);
};



console.log(getItemById(groceryList, 3));



// Function to get item price by name
const getItemPriceByName = (items, name) => {
  for (const item of items) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return item.price;
    }
  }
  return null; // Return null if not found
};



console.log(getItemPriceByName(groceryList, "banana"));



// Function to get items by category
const getItemsByCategory = (items, category) => {
  return items.filter(item => item.category.toLowerCase() === category.toLowerCase());
};



console.log(getItemsByCategory(groceryList, "dairy"));



// Function to count total items
const countItems = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};



console.log(countItems(groceryList));



// Function to calculate total price
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};



console.log(calculateTotalPrice(groceryList));

