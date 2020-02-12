import { UserForm } from './views/UserForm';
import { User } from './models/User';

const userForm = new UserForm(
  document.getElementById('root') as HTMLElement,
  User.build({ name: 'NAME', age: 20 }),
);

userForm.render();
