const Cat = require("./Cat");

const kitty = new Cat();
console.log("Type of animal: ", kitty.type);
console.log("What it sounds like: ", kitty.says());

console.log(kitty.eat());
