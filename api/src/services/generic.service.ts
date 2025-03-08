/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class GenericService<TGetter, TSetter> {
	constructor(private readonly prisma: PrismaService) {}

	public get resolveName(): string {
		return this.constructor.name.replaceAll('Service', '').toLowerCase();
	}

	protected async exists(id: number): Promise<boolean> {
		return !!(await (this.prisma as any)[this.resolveName].findFirstOrThrow({ where: { id } }));
	}

	public async getById(id: number): Promise<TGetter | null | undefined> {
		if (!(await this.exists(id))) {
			throw new NotFoundException('url not found');
		}
		return await (this.prisma as any)[this.resolveName].findUnique({
			where: { id },
		});
	}

	public async getAll(): Promise<TGetter[]> {
		return await (this.prisma as any)[this.resolveName].findMany();
	}

	public async create(data: TSetter): Promise<TGetter | null | undefined> {
		return await (this.prisma as any)[this.resolveName].create({
			data,
		});
	}

	public async update(id: number, data: TSetter): Promise<TGetter | null | undefined> {
		if (!(await this.exists(id))) {
			throw new NotFoundException('url not found');
		}
		return await (this.prisma as any)[this.resolveName].update({
			where: { id },
			data,
		});
	}

	public async delete(id: number): Promise<TGetter | null | undefined> {
		if (!(await this.exists(id))) {
			throw new NotFoundException('url not found');
		}
		return await (this.prisma as any)[this.resolveName].delete({
			where: { id },
		});
	}
}
