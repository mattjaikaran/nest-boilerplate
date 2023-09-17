import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      firstName: 'bob',
      lastName: 'jones',
      email: 'bob@gmail.com',
    },
    {
      id: 2,
      firstName: 'mary',
      lastName: 'smith',
      email: 'mary@gmail.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
