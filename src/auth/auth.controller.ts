import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const token = this.authService.login(req); // Supondo que retorne o JWT

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 1000, // 1 day
      path: '/',
    });

    return { message: 'Login successful' };
  }
}
