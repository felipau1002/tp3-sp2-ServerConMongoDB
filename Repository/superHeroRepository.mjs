import superHero from "../models/superheroe.mjs";
import IRepository from "./IRepository.mjs";


class SuperHeroRepository extends IRepository {
    static async obtenerPorID(id) {
        return await superHero.findById(id);
    }

    static async obtenerTodos() {
        return await superHero.find({});
    }

    static async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }

    static async obtenerMayoresDe30() {
        return await superHero.find({ edad: {$gt: 30} });
    }
}


export default SuperHeroRepository;