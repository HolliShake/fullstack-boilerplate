import { Controller } from '@nestjs/common';
import { Response } from 'express';
import { GenericService } from '@/services/generic.service';

@Controller()
export class GenericController<TGetter, TSetter, TService extends GenericService<TGetter, TSetter>> {
    constructor(protected readonly service: TService) {}

    protected async genericGetAll(res: Response): Promise<Response> {
        return res.status(200).json(await this.service.getAll());
    }

    protected async genericGetById(res: Response, id: string): Promise<Response> {
        return res.status(200).json(await this.service.getById(Number(id)));
    }

    protected async genericCreate(res: Response, data: TSetter): Promise<Response<TGetter|null|undefined>> {
        return res.status(200).json(await this.service.create(data));
    }
    
    protected async genericUpdate(res: Response, id: string, data: TSetter): Promise<Response<TGetter|null|undefined>> {
        return res.status(200).json(await this.service.update(Number(id), data));
    }

    protected async genericDelete(res: Response, id: string): Promise<Response<TGetter|null|undefined>> {
        return res.status(200).json(await this.service.delete(Number(id)));
    }
}