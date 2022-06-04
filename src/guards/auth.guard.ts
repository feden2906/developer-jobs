// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
//
// @Injectable()
// export class UserAuthGuard implements CanActivate {
//   constructor() {}
//
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     try {
//       const request: any = context.switchToHttp().getRequest();
//       const token: any = request.headers.authorization.split(' ')[1];
//       if (token) {
//         const token: IUserAccessToken | null = await this.userTokenRepository.findOne({
//           _id: bearerToken,
//           isActive: true,
//         });
//       }
//     } catch (error) {
//       throw new UnauthorizedException();
//     }
//   }
// }
