import { Module } from '@nestjs/common';
// Controller
import { UserController } from '@/controllers/user.controller';
import { RoleController } from '@controllers/role.controller';
import { RoleActionController } from './controllers/role-action.controller';
// Service
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from '@services/user.service';
import { RoleService } from '@services/role.service';
import { RoleActionService } from './services/role-action.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    UserController,
    RoleController,
    RoleActionController
  ],
  providers: [
    UserService,
    RoleService,
    RoleActionService
  ],
})

export class AppModule {}
