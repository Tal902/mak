const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"]
];
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
theList.shift;
console.log(theList);
console.log(theList.shift("Laurence"));
console.log(theList);
theList.unshift("FIRST");
console.log(theList);
for (let i = 7; i >= 2; i--) {
  console.log(theList.pop(i));
}
console.log(theList);

console.log(theList.concat("Middle", "hello world", "Last"));
