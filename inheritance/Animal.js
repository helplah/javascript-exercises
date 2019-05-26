function Animal(type) {
  this.type = type;
}

Animal.prototype.says = function() {
  return "Hello, there!";
};

module.exports = Animal;
