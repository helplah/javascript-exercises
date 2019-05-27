// Execute the command `node <filename>.js` in the terminal to run the file

/*
const bob = {
  name: "Bob",
  hobbies: ["coding", "swimming", "hiking"],
  about: () => {
    return bob.hobbies.forEach(hobby => {
      console.log(`${bob.name} likes ${hobby}`);
    });
  }
};

bob.about();
*/

const bob = {
  name: "Bob",
  hobbies: ["coding", "swimming", "hiking"],
  about: function() {
    return this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};

bob.about();

/*
const bob = {
  name: "Bob",
  hobbies: ["coding", "swimming", "hiking"],
  about: function() {
    return this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    }, bob); // change bob to this and it works too
  }
};

bob.about();
*/
