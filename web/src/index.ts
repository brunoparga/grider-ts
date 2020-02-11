import { User } from './models/User';

const user = User.build({ name: 'newer name', age: 44 });

user.on('save', () => console.log(user));
user.save()
