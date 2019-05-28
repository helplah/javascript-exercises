const Animal = require("./Animal");

class Cat extends Animal {
  constructor(type) {
    super("Cat");
  }

  // absence of eat() will call instance method eat on Animal

  says() {
    return "Meow!";
  }
}

/*
function Cat() {
  Animal.call(this, "cat");
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.says = function() {
  return "Meow!";
}; */

module.exports = Cat;
