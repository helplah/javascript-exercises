const name = "Alice";

// closure refers to the ability of the function to contain its own name variable
// purpose of this exercise is to set your own parameters to override global variable w the same name
function Person(name = "Bob") {
  const hobbies = ["coding", "swimming", "hiking"];

  function about() {
    hobbies.forEach(function(hobby) {
      console.log(`${name} likes ${hobby}`);
    });
  }

  function sayName() {
    console.log("My name is", name);
  }

  return {
    name,
    hobbies,
    about,
    sayName
  };
}

const bob = Person("Bob");
bob.sayName();
bob.about();

const sarah = Person("Sarah");
sarah.sayName();
sarah.about();
