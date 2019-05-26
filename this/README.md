# `this` exercise

The `this` keyword refers to the object that is executing the current function.

## The problem

Execute the command `node <filename>.js` in the terminal to run the file.

We can see that `bob.about()` returns:

```
undefined likes coding
undefined likes kayaking
undefined likes chess
```

We actually want to print their name, but for some reason it's showing `undefined`.

This is because the function inside `forEach` is being called in the global context and since `this.name` is not defined in the global context, we get `undefined`.

## This solution

Let's refer to the documentation for [`Array​.prototype​.for​Each()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to see if we can find a solution to this problem.

Notice that `forEach` actually takes in two arguments - a callback function and a value that you want `this` to refer to.

Therefore, we can pass it the correct reference to `this` into `forEach` to solve the problem.

## Another solution

In ES6, arrow functions implicitly bind `this` to the calling function. This means that when we use an arrow function `this.name` will actually refer to the object that it was called from.

Try refactoring the code to use an arrow function instead and see the results.
