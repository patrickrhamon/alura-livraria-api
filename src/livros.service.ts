import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ){ }

    async list(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async get(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    async create(model: Livro) {
        this.livroModel.create(model);
    }

    async update(model: Livro): Promise<[number]> {
        return this.livroModel.update(model, {
            where: {
                id: model.id
            }
        });
    }

    async delete(id: number) {
        const livro: Livro = await this.get(id);
        livro.destroy();
    }
}