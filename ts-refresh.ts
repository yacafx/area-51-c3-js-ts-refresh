const myName = 'Sergio';
const lastName = 'Brito';

const fullName = myName + ' ' + lastName;

const otherFullName = `${myName} \` "" ''  ${lastName}`;

const fruit = {
  name: 'mango',
  color: 'verde',
  status: 'maduro'
} as const;

fruit.name = 'manzana';
