import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenericService } from '@/services/generic.service';

@Controller() // Ensure this is present
export class GenericController<TModel, TService extends GenericService<TModel>> {
    constructor(protected readonly service: TService) {}

    @Get("all")
    async genericGetAll(): Promise<TModel[]> {
        return await this.service.getAll();
    }

    @Get(":id")
    async genericGetById(@Param('id') id: string): Promise<TModel | null> {
        return await this.service.getById(Number(id));
    }

    @Post("create")
    async genericCreate(@Body() data: TModel): Promise<TModel> {
        return await this.service.create(data);
    }

    @Put("update/:id")
    async genericUpdate(@Param('id') id: string, @Body() data: TModel): Promise<TModel | null> {
        return await this.service.update(Number(id), data);
    }

    @Delete("delete/:id")
    async genericDelete(@Param('id') id: string): Promise<{ success: boolean }> {
        const deleted = await this.service.delete(Number(id));
        return { success: deleted };
    }
}