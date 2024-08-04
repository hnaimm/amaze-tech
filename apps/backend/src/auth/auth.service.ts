import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { VerificationService } from 'src/verification/verification.service';

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
    const verification = await this.verificationService.create({
      code: userInfo.email,
      email: userInfo.email,
    });

    //Generate JWT
    const payload = { sub: newUser.id, email: newUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      verification_code: verification.code,
      user: newUser,
    };
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
