# Javascript for Noobs

Javascript is a programming language that helps us execute our code through the browser. This means that it can be used power any HTML page or handle any events between the user and the website. This guide will only cover the basics, but it will let you write production ready javascript for any website.

This guide will cover the following topics:

- [Comments](#comments)
- [Variables & Data types](#variables--data-types)
- [Expressions & Statements](#expressions--statements)
- [Functions](#functions)
- [DOM Manipulation](#dom-manipulation)
- [jQuery](#jquery)
- [Events](#events)
- [Ajax](#ajax)

Understanding these topics will help you understand how javascript works and allow you implement it's fetures to enhance the functionality of your websites


## Comments
[skip](#variables--data-types)

Comments are the most basic element in javascript. Comments have no effect at all on our code. However as a developer they are very helpful to help us understand what our code does.

There are two kinds of comments in Javascript

### Line comments

Line comments apply only to a single line. They are added after the following symbol `//`

```javascript
  // This is a comment
```

Anything after the `//` symbol will not be executed by the browser. They can also be added after a piece of code. In this case only the code before the comment will be executed.

```javascript
  var x; // This is a variable
```
### Block comments

Block comments can help us write several lines of comments without having to add `//` at the beginning of every line. To create a block comment add `/*` at the beginning of the comment and `*/` at the end.

```javascript
  /* This is a block comment.
     This helps us write a longer description without having
     to open comments in every line. */
```

Block comments are really useful and are commonly use to write [code documentation](http://usejsdoc.org/ "JSDoc"), or prevent a piece of code from executing while trying to debug your script.

Having good comments in your code may be something boring and time consuming. However it is extremely important, as it can help other people (and other developers) easily understand your code. Keep in mind that the fact that you wrote the code doesn't mean that you'll be the only person maintaining it.

## Variables & Data Types

Variables can be thought of as container that let us store data on them. These will help us while writing code by letting us save and re-use any data to accomplish your goal.

To create a variable, you use the following syntax:

```javascript
  var x;
```

This creates the container x which can be then used to store any kind of data in it.

A variable can also be created with a default variable:

```javascript
  var x = 1;
```

In this case, we are creating a variable x containing the value 1.

In javascript, your variables can store 6 kinds of data. These are known as our data types.

### Numbers

The example above is creating a variable storing a number. Numbers in variables can be manipulated using the basic math operators.

```javascript
  var foo = 1;
  var bar = 2 + 1; // bar = 3
  var biz = foo + bar; // biz = 4

  var x = biz - 3; // x = 1
  var y = bar * 2; // y = 4
  var z = y / 2; // z = 2
  var i = (z + 10) / 2; // i = 6
```
Javascript and other programming languages also have a special opertor called 'mod'. This operator would give us the remainder of a division between two numbers. the 'mod' operator is respresented by a `%`.


```javascript
  var x = 10 % 3; // x = 1
```

### Strings

In any programming language, we use the word strings to refer to words or phrases stored in a variable. When storing a string in a variable, it needs to be wrapped in single quotes.

```javascript
  var name = 'Mario';
```

Two strings can also be appended together. In programming we call this string concatenation

```javascript
  var opening = 'My favorite fruit is the ';
  var fruit = 'apple';

  var phrase = opening + fruit;
```

If you notice the content of the variables `opening` and `fruit` are wrapped in quotes. This is because they are strings. Then the variable `phrase` is adding the values of `opening` and `fruit`. Since these are strings, the addition results in the concatenation of both strings resulting in the value `'My favorite fruit is the apple'`

Numbers can also be concatenated with strings

```javascript
  var ammount = 5;
  var phrase = 'I bought ' +  ammount + ' apples';
```
In this example we are concatenating a string with a number and then with another string, forming the phrase `'I bought 5 apples'`

### Booleans

A boolean variable can contain only two values: `true` or `false`. A boolean variable can help define conditions in your code. We will go more into deep on this once we reach the section about Statements.

```javascript
  var isLearningJavascript = true;
  var isLearningRuby = false;
```

Boolean values should not be wrapped in single quotes. Otherwise they will be interpreted as strings and they would not be able to fulfill their purpose. Apart from conditions, another common use for booleans is to set flags in your code.

### Arrays

Arrays are variables that contain several values. These are commonly used to store a group of related values. Arrays can store Numbers, Strings, Booleans or Null.

An array will look like this

```javascript
  var colors = ['red', 'blue', 'pink', 'black'];
```

In this example, our array contains four different values. We can access the different values in the array by accessing the corresponding index for the value.

```javascript
  var colors = ['red', 'blue', 'pink', 'black'];
  var favoriteColor = colors[0]; // red
  var mostHatedColor = colors[1]; // blue
```
The array's index will always start in 0.

After creating an array, you can add more values into it

```javascript
  var colors = ['red', 'blue', 'pink', 'black'];
  colors.push('purple'); // This will add purple at the end of the colors array: ['red', 'blue', 'pink', 'black', 'purple']
```
When you create an array, you will normally know the size of the array. However, an array can also be dynamically created by your code. When this happens you may not know the size of your array. You can check it using the following property

```javascript
  var colors = ['red', 'blue', 'pink', 'black'];
  var arraySize = colors.length; // araySize = 4
```
The `length` property will provide the literal size of the array. However, keep in mind that the index of arrays starts in 0, so you need to be careful when you use access the array using it's lenght as its last index will be its length - 1

```javascript
  var colors = ['red', 'blue', 'pink', 'black'];
  var arraySize = colors.length; // araySize = 4
  var invalidColor = colors[arraySize]; // This will throw an error
  var validColor = colors[arraySize - 1]; // validColor = 'black'
```

Another important thing about arrays is that not all their values need to be of the same data type, it can contain sever types of data at the same time.

```javascript
  var randomValues = ['red', 5, false, 'cow'];
```

### Objects

Objects are very similar to arrays as in they are variables that can contain several values. However, objects have a key property that helps give more meaning to the information stored in them.

```javascript
  var userInfo = {name: 'Derp', age: 26, position: 'Javascript Developer'};
```

Object values can be accessed in two different ways.

```javascript
  var userInfo = {name: 'Derp', age: 26, position: 'Javascript Developer'};
  var name = userInfo.name;
  var age = userInfo['age'];
```
We recommend using the first syntax. However there are times where the second is necessary to be able to access the information in the object.

Arrays can also contain objects. This helps us group a set of key/value pairs.

```javascript
  var users = [{name: 'Derp', age: 26, position: 'Javascript Developer'}, {name: 'Derpina', age: 27, position: 'Designer'}, {name: 'Herp', age: 25, position: 'Creative Director'}];
```
For readability purposes, arrays and objects can also be broken down into several lines.

```javascript
  var users = [
    {
      name: 'Derp',
      age: 26,
      position: 'Javascript Developer'
    },
    {
      name: 'Derpina',
      age: 27,
      position: 'Designer'
    },
    {
      name: 'Herp',
      age: 25,
      position: 'Creative Director'
    }
  ];
```
Having our objects properly idented helps us understand where an object in the array starts and where it ends making it a lot easier to read and understand while looking at the code.

### Null

The last data type we are going to talk about is the `null` value. For a variable to contain a `null` value means that it's not storing any data or that it's empty. This is the value we assign to a variable when we want to remove its content.

## Expressions & Statements

Variables help us store data. But the fun starts when we use this data to check whats happening in our page and do something about it. To do these kinds of checks we use a combination of expressions and statements.

Expressions are pieces of code that produce a value and can be written wherever a value is expected. An example of an expression would be the value of a variable.

```javascript
  var myExpression = 2 + 2; // 2 + 2 is an expression
  myExpression; // This is also an expression
```

Statements are pieces of code that perform an action. In this guide we will focus on two kinds of statements: Conditions and Loops

### Conditions

A conditional statement can help us decide what code to execute based on the result of a condition. There are four kinds of conditional statements.

- if
- else
- else if
- switch

#### if

The `if` statement is the most commonly used conditional statement. It lets us check for a condition to be met before letting a piece of code execute. This condition is specified through an expression.

The most common types of expressions used for conditions use [comparisson operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators) to check if a they are met. When the `if` statement is executed, the expression is evaluated returning a boolean value. This value will decide if the code is executed or not.

```javascript
  var x = 5;

  if (x == 5) {
    // The code in here will be executed
  }

  if (x == 3) {
    // The code here will not be executed
  }
```

Apart from checking for an expression using a comparisson operator, an if statement can also just check for a variable. If this variable has any value different from `0`, `null`, `undefined` or `false`, the condition will return true;

```javascript
  var x = 5;
  var y = 0;

  if (x) {
    // The code in here will be executed
  }

  if (y) {
    // The code here will not be executed
  }
```

#### else

The `else` statement goes hand to hand with the `if` statement. It enhances its power by letting us execute one piece of code if the condition is met and a different piece of code if it is not met.

```javascript
  var x = 5;

  // In this example only the code in the else will be executed
  if (x == 3) {
    // The code in here will not be executed
  } else {
    // The code here will be executed
  }
```

When using an `else` statement the code inside it will not be executed if the condition is met.

#### else if

The `else if` statement is very similar to the `else` statement. However, it let's us specify a second (or third, or nth) condition to be checked.

```javascript
  var x = 5;

  // In this example the code in the else if will be executed
  if (x == 3) {
    // The code in here will not be executed
  } else if (x == 5) {
    // The code here will be executed
  }

  // In this example no code will be executed as none of the conditions are met
  if (x == 3) {
    // The code in here will not be executed
  } else if (x == 2) {
    // The code here won't be executed either
  }
```

`else if` can also be followed by an `else`. This way the conditions in the `if` and the `else if` are not met the decission will be defaulted to the `else`.

```javascript
  var x = 5,;

  // In this example the code in the else will be executed as none of the conditions are met
  if (x == 3) {
    // The code in here will not be executed
  } else if (x == 2) {
    // The code here won't be executed either
  } else {
    // The code here will be executed
  }
```

#### switch

There will be times in which you may want to check for several conditions for the same expression. In this cases you could use a lot of ifs and else ifs. However this would make your code really confusing and hard to read.

For this cases you can use the `switch` statement. `switch` will check a variable and compare it with as many `case`s as you need until the condition is met. Each one of this cases is delimited by a `break`. Aditionally, if no condition is met, a `default` can be specified. This `default` is optional and doesn't need to be part of the `switch`.

```javascript
  // The code in this switch will be executed based on the value of the variable fruit
  switch(fruit) {
    case 'apple':
      // Code here will execute if fruit == 'apple'
    break;

    case 'orange':
      // Code here will be executed if fruit == 'orange'
    break;

    default:
      // The code here will be executed if fruit is different to all the cases above.
    break;
  }
```