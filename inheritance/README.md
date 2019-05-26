# Inheritance

## The problem

We have a Cat class that inherits from an Animal class.

We want to print the type of animal to say "cat" instead of `undefined`.

They have inherited the `say()` method. We want the Cat class to say "Meow!" instead of the default "Hello, there!".

## This solution

To pass the type of animal to the parent class, we can get the Cat class to call its parent and pass it its type, like so:

```js
function Cat() {
  Animal.call(this, "cat");
}
```

To overide the `say()` method, we can define a `say()` method on `Cat.prototype`, like so:

```
Cat.prototype.says = function() {
  return "Meow!";
};
```

## Classes in JavaScript

In ES6, we are able to declare classes using the `class` keyword. Try plugging in the code into the Labeb transpiler to convert it from ES5 to ES6.
