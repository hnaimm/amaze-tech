import { MinLength } from 'class-validator';

export class SignInDto {
  @MinLength(3)
  email;

  @MinLength(3)
  password;
}
