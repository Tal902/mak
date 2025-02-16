const arr = ["car", "vaccum cleaner", "clothes"];
const ar = [
  (obj1 = {
    name: "car",
    model: "vitz",
    cost: 1000000,
    quantity: 3
  }),
  (obj2 = {
    name: "car",
    model: "witz",
    cost: 500000,
    quantity: 2
  }),
  (obj3 = {
    name: "car",
    model: "hammer",
    cost: 10000000,
    quantity: 2
  })
];
for (let i = 0; i <= 2; i++) {
  console.log(arr.push(ar[i]));
}
console.log(arr[5].quantity);

// console.log(arr.push(obj1.name));
// console.log(arr);
//   for(let)
