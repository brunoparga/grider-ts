import { User } from './models/User';

const user = new User({ id: 1, name: 'newerer name', age: 42 });

user.on('save', () => console.log(user));

user.save();
