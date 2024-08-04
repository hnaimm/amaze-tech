import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { VerificationService } from 'src/verification/verification.service';
import generateVerificationCode from 'src/functions/generateVerificationCode';
import sendVerificationEmail from 'src/functions/sendVerificationEmail';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private verificationService: VerificationService,
    private jwtService: JwtService,
  ) {}

  async signUp(userInfo: SignUpDto): Promise<any> {
    const newUser = await this.usersService.create(userInfo);

    if (!newUser) {
      throw new UnauthorizedException();
    }

    //add veritification code to varification table

    const verificationCode = generateVerificationCode(userInfo.email);

    const verification = await this.verificationService.create({
      code: verificationCode,
      email: userInfo.email,
    });

    try {
      sendVerificationEmail(
        verification.email,
        verification.code,
        newUser.firstName,
      );

      return {};
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async signIn(signInEmail: string, signInPassword: string): Promise<any> {
    const user = await this.usersService.findOne(signInEmail);

    if (user?.password !== signInPassword) {
      throw new UnauthorizedException();
    }

    //Generate JWT
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
