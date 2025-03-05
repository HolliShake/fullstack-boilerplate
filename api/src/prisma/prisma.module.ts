// src/prisma/prisma.module.ts
import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes PrismaService available application-wide
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export to use in other modules
})
export class PrismaModule {}
