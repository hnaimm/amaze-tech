import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  is_verified;
}
