import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // ในที่นี้เราจะ return true เสมอ เพื่อให้ผ่านการตรวจสอบ
    // ในการใช้งานจริง คุณควรตรวจสอบ JWT token ที่นี่
    return true;
  }
}