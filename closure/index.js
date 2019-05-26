const name = "Alice";

function Person() {
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

const bob = Person();
bob.sayName();
bob.about();
