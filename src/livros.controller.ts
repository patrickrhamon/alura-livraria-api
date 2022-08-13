import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) {

    }

    @Get('/')
    async list(): Promise<Livro[]> {
        return this.livrosService.list();
    }

    @Get(':id')
    async get(@Param() params): Promise<Livro> {
        return this.livrosService.get(params.id);
    }

    @Post()
    async create(@Body() model: Livro) {
        this.livrosService.create(model);
    }

    @Put()
    async update(@Body() model: Livro): Promise<[number]> {
        return this.livrosService.update(model);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.livrosService.delete(params.id);
    }
}