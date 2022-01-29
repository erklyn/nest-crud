import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //Bu noktadan sonra bir filter tarzı bir şey implement edip ona göre geçişe izin vermek lazım.
    return true;
  }
}
