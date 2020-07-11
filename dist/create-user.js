"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    var age = user.age ? user.age : 1000;
    var createdUser = "\n    Nome: " + user.name + "\n    Email: " + user.email + "\n    Password: " + user.password + "\n    Age: " + age + " anos de idade\n    techs: " + user.techs + "\n    address: " + user.address + "\n  ";
    return createdUser;
}
exports.default = createUser;
