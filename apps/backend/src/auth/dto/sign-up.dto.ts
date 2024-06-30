import { MinLength } from 'class-validator';
import { SignInDto } from './sign-in.dto';

export class SignUpDto extends SignInDto {
  @MinLength(3)
  firstName;

  @MinLength(3)
  lastName;

  @MinLength(3)
  phoneNumber;

  @MinLength(3)
  username;
}
