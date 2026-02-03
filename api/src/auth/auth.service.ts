import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return [
      {
        name: 'Felipe',
        lastName: 'Blaksley',
        email: 'felipe.blaksley@hotmail.com',
      },
    ];
  }
}
