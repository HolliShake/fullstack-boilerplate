// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class GenericService <TModel, TSetter> {
    constructor(private readonly prisma: PrismaService) {}

    private get resolveName() {
        return this.constructor.name.replaceAll("Service", "").toLowerCase();
    }

    protected async exists(id: number): Promise<boolean> {
        return !!(await this.prisma.user.findFirstOrThrow({ where: { id } }));
    }    

    public async getById(id: number): Promise<TModel|null|undefined> {
        if (!(await this.exists(id))) {
            throw new NotFoundException('url not found');
        }
        return await (this.prisma as any)[this.resolveName].findUnique({ 
            where: { id }
        });
    }

    public async getAll(): Promise<TModel[]> {
        return await (this.prisma as any)[this.resolveName].findMany();
    }

    public async create(data: TSetter): Promise<TModel|null|undefined> {
        return await (this.prisma as any)[this.resolveName].create({
            data
        });
    }

    public async update(id: number, data: TSetter): Promise<TModel|null|undefined> {
        if (!(await this.exists(id))) {
            throw new NotFoundException('url not found');
        }
        return await (this.prisma as any)[this.resolveName].update({
            where: { id },
            data
        });
    }

    public async delete(id: number): Promise<TModel|null|undefined> {
        if (!(await this.exists(id))) {
            throw new NotFoundException('url not found');
        }
        return await (this.prisma as any)[this.resolveName].delete({
            where: { id }
        });
    }
}
