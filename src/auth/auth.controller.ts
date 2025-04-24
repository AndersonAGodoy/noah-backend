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
    const { access_token } = this.authService.login(req.user); // Supondo que retorne o JWT
    res.setHeader(
      'Access-Control-Allow-Origin',
      typeof req.headers.origin === 'string'
        ? (req.headers.origin as string)
        : '*',
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.cookie('token', access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 1000, // 1 day
      path: '/',
    });

    return { message: 'Login successful' };
  }
}
