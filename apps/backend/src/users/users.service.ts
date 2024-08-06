import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.prismaClient.user.create({
      data: { ...createUserDto, is_verified: false },
    });
  }

  async findAll() {
    return this.prisma.prismaClient.user.findMany();
  }

  async findOne(email: string) {
    try {
      const resultsUsers: any = await this.prisma.prismaClient.$queryRaw`
      SELECT   
          id,
          firstName,
          lastName,
          phoneNumber,
          username,
          email,
          password,
          is_verified,
          getFullName(${email}) AS fullName 
        FROM user
        WHERE email = ${email}
     `;

      let resultUser = {
        ...resultsUsers[0],
        is_verified:
          resultsUsers[0].is_verified === 0
            ? false
            : resultsUsers[0].is_verified,
      };

      return resultUser;
    } catch (err) {
      return this.prisma.prismaClient.user.findUnique({
        where: { email },
      });
    }
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    return this.prisma.prismaClient.user.update({
      where: { email },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return this.prisma.prismaClient.user.delete({
      where: { id: parseInt(id) },
    });
  }
}
