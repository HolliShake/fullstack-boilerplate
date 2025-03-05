// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class GenericService <TModel> {
    constructor(private readonly prisma: PrismaService) {}

    private resolveName() {
        return this.constructor.name.replaceAll("Service", "").toLowerCase();
    }

    async getById(id: number): Promise<TModel|null|undefined> {
        return (this.prisma as any)[this.resolveName()].findUnique({ 
            where: { id }
        });
    }

    async getAll(): Promise<TModel[]> {
        return (this.prisma as any)[this.resolveName()].findMany();
    }

    async create(data: TModel): Promise<TModel|null|undefined> {
        return (this.prisma as any)[this.resolveName()].create({
            data
        });
    }

    async update(id: number, data: TModel): Promise<TModel|null|undefined> {
        return (this.prisma as any)[this.resolveName()].update({
            where: { id },
            data
        });
    }

    async delete(id: number): Promise<boolean> {
        return (this.prisma as any)[this.resolveName()].delete({
            where: { id }
        });
    }
}
