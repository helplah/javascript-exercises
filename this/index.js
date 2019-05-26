// Execute the command `node <filename>.js` in the terminal to run the file

const bob = {
  name: "Bob",
  hobbies: ["coding", "swimming", "hiking"],
  about: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};

bob.about();
