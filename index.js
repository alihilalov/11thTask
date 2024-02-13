const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 3, name: 'Messi', email: 'messi@example.com', location: { city: 'Miami', country: 'USA' } },
    { id: 4, name: 'Alex', email: 'alex@example.com', location: { city: 'Rio de Janeiro', country: 'Brazil' } },
    { id: 5, name: 'Dominic', email: 'dominic@example.com', location: { city: 'Budapest', country: 'Hungary' } },
];

const orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Electron Book', quantity: 2, price: 1000 },
    { orderId: 104, customerId: 4, product: 'Drone', quantity: 3, price: 900 },
    { orderId: 105, customerId: 5, product: 'Tablet', quantity: 1, price: 500 },
];

//part 1 for get new array for only customers email
const customersEmail=customers.map((customer)=> customer.email)
//part 2 for total value get new array that contains only total price is greater than 1200
const totalValue=orders.filter(({quantity,price})=>{
  return (quantity*price>1200)
})
//part 3 find the customer who is Alice
const customerName = customers.find((customer)=>customer.name==="Alice")
//part 4 for find index of orderId 102
const specificIndexOrder=orders.findIndex((order)=> order.orderId===102)
//part 5 for customer who lives in usa
const specificCountry=customers.some((customer)=> customer.location.country==="USA")
//part 6 for fro print a summary for each order
orders.forEach(order => {
  const customer = customers.find(c => c.id === order.customerId);
  const customerName = customer ? customer.name : 'Unknown Customer';
  console.log(`Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`);
});
//part 7 for sorted alphabetically by name
const sortedCustomers= customers.sort(customer=>customer.name)

console.log("--------------------------------------------------------------");
console.log("Customers email: ",customersEmail);
console.log("--------------------------------------------------------------");
console.log("Customers name: ",customerName);
console.log("--------------------------------------------------------------");
console.log("Orders total value: ",totalValue);
console.log("--------------------------------------------------------------");
console.log("Specific index order: ",specificIndexOrder);
console.log("--------------------------------------------------------------");
console.log({specificCountry});
console.log("--------------------------------------------------------------");
console.log("Sorted alphabetically by name: ",sortedCustomers);
