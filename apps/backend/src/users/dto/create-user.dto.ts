import { MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  firstName;

  @MinLength(3)
  lastName;

  @MinLength(3)
  phoneNumber;

  @MinLength(3)
  username;

  @MinLength(3)
  email;

  @MinLength(3)
  password;
}
