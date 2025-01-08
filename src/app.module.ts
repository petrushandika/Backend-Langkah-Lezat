import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, RoleModule, AuthModule],
})
export class AppModule {}
