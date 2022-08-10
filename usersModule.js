"use strict";
window.onload = function () {
  console.log(window.localStorage.getItem("myObject"));
};

function openRegister() {
  window: location.assign("02_UsersModule_Register.html");
}
function openLogin() {
  window: location.assign("01_UsersModule_login.html");
}
function openUsers() {
  window: location.assign("01_UsersModule_login.html");
}
function registered() {
  createUser();
  document.getElementById("wrapper2").innerHTML =
    "<p><strong>Registration Successful!</strong> Welcome<br/><a href='#' onclick='openLogin()'>Log-in to continue</a><p>";
}
function open() {
  window: location.assign("03_UsersModule_Users.html");
}
function loggedIn() {
  open();
}

var arr = [];

function Person(name, email, pass1, pass2) {
  this.fullName = name;
  this.email = email;
  this.password = pass1;
  this.confirmPassword = pass2;
  this.correctPassword = function () {
    if (this.password == this.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
}
var arr = [];
function createUser() {
  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password1 = document.getElementById("loginPassword").value;
  var password2 = document.getElementById("confirmPassword").value;
  var obj = new Person(name, email, password1, password2);

  Object.defineProperty(obj, "editUser", {
    get: function () {
      this.fullName = "this.fullName";
      this.email = "this.email";
    },
  });
  Object.defineProperty(obj, "editName", {
    set: function (name2) {
      this.fullName = name2;
    },
  });
  Object.defineProperty(obj, "editEmail", {
    set: function (email2) {
      this.email = email2;
    },
  });
  console.log(obj);
  arr.push({ obj });
  console.log(arr);
  window.localStorage.setItem("myObject", JSON.stringify(arr));
}
