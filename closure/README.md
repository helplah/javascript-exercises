# Closure

## The problem

The function `sayName()` prints out "My name is Alice," but we want it to say "My name is Bob" instead.

The function `about()` prints out Alice's name instead of Bob. How can we get it to print Bob's name instead?

## This solution

The reason why our program prints out Alice's name is because these functions form closures which have access to variables declared in their outer scope.

All we have to do is define a parameter called `name` in the Person function

```js
function Person(name) {
```

and then pass in the name when we invoke it

```js
const bob = Person("Bob");
```
