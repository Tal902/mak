let myCar = {
  make: 2003,
  model: "vitz",
  color: "red"
};
console.log(myCar["color"]);
myCar["year"] = 2004;
console.log(myCar["year"]);
console.log(myCar);

let c = "color";
console.log(myCar[c]);
myCar.forSale = "yep";
console.log(myCar.forSale);
console.log(myCar.make);
console.log(myCar["model"]);
console.log(myCar["input"]);
