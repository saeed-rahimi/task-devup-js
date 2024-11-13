"use strict";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function greet(greeting, exclamation) {
  console.log(
    `${greeting}, ${this.firstName} ${this.lastName}! You are ${this.age} years old${exclamation}`
  );
}

greet.call(person, "Hello", "!");

greet.apply(person, ["Hello", "!"]);

const boundGreet = greet.bind(person, "Hello", "!");
boundGreet();

const Ahmad = {
  firstName: "Ahmad",
  lastName: "Rahimi",
  age: 25,
};

greet.call(Ahmad, "Hi", "!");
