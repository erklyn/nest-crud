import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      //User with no authorize just throws exception
      return false;
    }
    // In order to get the user role we use this
    // But I'm just trying to learn nest so this is fine for now
    //const request = context.switchToHttp().getRequest();
    // const user = request.user;
    (roles) => {
      if (roles) {
        return 'authorized user';
      }
    };
  }
}
