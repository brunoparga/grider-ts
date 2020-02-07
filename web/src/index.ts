import { User } from './models/User';

const user = new User({ name: 'banana', age: 0 });

user.on('change', () => console.log('User was changed'));
user.trigger('change');