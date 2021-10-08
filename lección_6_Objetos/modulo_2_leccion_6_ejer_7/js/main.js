'use strict';

const userInfo = {};
const job = "developer";



userInfo.firstName = "Paula";
userInfo.lastName = "Albo";
userInfo.age = 33;
userInfo.job = job;

console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.age);
console.log(userInfo.job);

userInfo.firstName = "Ana";
userInfo.age = userInfo.age + 1;

console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.age);
console.log(userInfo.job);