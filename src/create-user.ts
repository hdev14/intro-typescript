
interface Address {
  city: string;
  uf: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  age?: number;
  techs: string[];
  address: Address;
}

export default function createUser(user: User) {
  
  const age = user.age ? user.age : 1000;
  const createdUser = `
    Nome: ${user.name}
    Email: ${user.email}
    Password: ${user.password}
    Age: ${age} anos de idade
    techs: ${user.techs}
    address: ${user.address}
  `;

  return createdUser;
}