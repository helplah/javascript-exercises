class Animal {
  constructor(type) {
    this.type = type;
  }

  eat() {
    return "An animal eats burger...";
  }

  says() {
    return "Hello, there!";
  }
}

/*
function Animal(type) {
  this.type = type;
}

Animal.eat = function() {
  // class or static method
  return "Onomnom";
};

Animal.prototype.says = function() {
  // instance method
  return "Hello, there!";
}; */

module.exports = Animal;
