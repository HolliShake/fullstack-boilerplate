import { Module } from '@nestjs/common';
// Controller
import { UserController } from '@/controllers/user.controller';
import { RoleController } from './controllers/role.controller';
// Service
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from '@/services/user.service';
import { RoleService } from './services/role.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    UserController,
    RoleController
  ],
  providers: [
    UserService,
    RoleService
  ],
})

export class AppModule {}
