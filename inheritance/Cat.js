const Animal = require("./Animal");

function Cat() {
  Animal.call(this, "moo");
}

Cat.prototype = Object.create(Animal.prototype);

module.exports = Cat;
