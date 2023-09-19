"use strict";

function userName() {
  var username = prompt("Add your name");

  if (username && username.length) {
    console.log("Hello, ".concat(username));
  }

  if (username.length <= 3) {
    console.log("Your name is too short");
  }
}

function userAge() {
  var userBirthday = parseInt(prompt("Add your birthday here"));
  var currentYear = 2023;

  if (!isNaN(userBirthday)) {
    if (currentYear < userBirthday) {
      console.log("You are not borned yet");
    } else {
      var _userAge = currentYear - userBirthday;

      console.log(_userAge);
    }
  } else {
    console.log("Add valid year");
    userAge();
  }
}

function squarePerimeter() {
  var squarePerimeterLength = parseInt(prompt("Write length of square"));
  var perimeterLength = squarePerimeterLength * 4;

  if (!isNaN(squarePerimeterLength)) {
    if (squarePerimeterLength <= 0) {
      console.log("Try again");
    } else {
      console.log(perimeterLength);
    }
  } else {
    console.log("Write a number");
    squarePerimeter();
  }
}

function circleArea() {
  var circleRadius = parseInt(prompt("Write a circle radius"));
  var circleAreais = Math.PI * Math.pow(circleRadius, 2);

  if (!isNaN(circleRadius)) {
    if (circleRadius <= 0) {
      console.log("Only numbers");
    } else {
      console.log("Circle Area is ".concat(circleAreais));
    }
  } else {
    console.log("Only numbers");
    circleArea();
  }
}