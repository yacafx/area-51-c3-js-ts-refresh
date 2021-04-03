import * as _ from 'lodash';

interface User {
  name: string;
  lastName: string;
  age: number;
  status: boolean;
}

const user: User = {
  name: 'Sergio',
  lastName: 'Brito',
  age: 20,
  status: true
};

const fullName = _.concat(user.name, user.lastName);
// console.log('User ::: ', user);
// console.log('fullName ::: ', fullName);
// console.log('Date ::: ', _.now());
