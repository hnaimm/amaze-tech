import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AddVerificationDto } from './dto/add-verification.dto';
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Get()
  getVerification() {
    return this.verificationService.findAll();
  }

  @Get(':email')
  getVerificationByUserId(@Param('email') email: string) {
    return this.verificationService.findOne(email);
  }

  @Post()
  updateUser(@Body() addVerificationDto: AddVerificationDto) {
    return this.verificationService.create(addVerificationDto);
  }

  @Delete(':email')
  deleteUser(@Param('email') email: string) {
    return this.verificationService.remove(email);
  }
}
